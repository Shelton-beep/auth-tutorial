//import { Poppins } from "next/font/google";
//import { cn } from "@/lib/utils";

import LogInButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  //const font = Poppins({ subsets: ["latin"], weight: ["600"] });

  return (
    <main
      className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-sky-400 to-blue-800"
    >
      <div className="space-y-6 text-center">
        {/*<h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
          >*/}
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg"> A simple authentication service</p>
        <div>
          <LogInButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LogInButton>
        </div>
      </div>
    </main>
  );
}
