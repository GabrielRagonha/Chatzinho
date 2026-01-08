const ErrorMessage = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  if (!title || !message) return null;

  return (
    <div className="bg-red-950/50 border border-red-900 p-4 text-center">
      <p className="text-red-500 text-sm font-bold">{title}</p>
      <p className="text-zinc-500 text-xs mt-1">{message}</p>
    </div>
  );
};

export default ErrorMessage;
