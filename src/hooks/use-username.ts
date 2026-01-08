import { ANIMALS, STORAGE_KEY } from "@/constants";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };

    main();
  }, []);

  const generateUsername = () => {
    const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];

    return `${word}-anônimo-${nanoid(5)}`;
  };

  return { username };
};
