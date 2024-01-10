import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex bg-emerald-500/15 p-3 rounded-md items-center gap-x-2 text-emerald-500">
      <CheckCircle className="w-4 h-4" /> {message}
    </div>
  );
};
