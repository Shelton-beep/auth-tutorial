"use client";

import { useRouter } from "next/navigation";

interface LogInButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

function LogInButton({ children, mode, asChild }: LogInButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO:iMPLEMENT MODAL</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default LogInButton;
