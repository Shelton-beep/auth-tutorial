import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex bg-destructive/15 p-3 rounded-md items-center gap-x-2 text-destructive">
      <AlertTriangle className="w-4 h-4" /> {message}
    </div>
  );
};
