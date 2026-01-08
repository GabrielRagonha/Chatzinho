import { redis } from "@/lib/redis";
import Elysia from "elysia";

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export const authMiddleware = new Elysia({ name: "auth" })
  .error({ AuthError })
  .onError(({ code, set }) => {
    if (code === "AuthError") {
      set.status = 401;
      return { error: "Não autorizado" };
    }
  })
  .derive({ as: "scoped" }, async ({ query, cookie }) => {
    const roomId = query.roomId;
    const token = cookie["X-Auth-Token"].value as string | undefined;

    if (!roomId || !token) {
      throw new AuthError("Token ou ID da sala faltando.");
    }

    const connected = await redis.hget<string[]>(`meta:${roomId}`, "connected");

    if (!connected?.includes(token)) {
      throw new AuthError("Token inválido");
    }

    return {
      auth: { roomId, token, connected },
    };
  });
