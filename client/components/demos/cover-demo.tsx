import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl md:text-7xl 
       font-semibold
        max-w-8xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 dark:from-neutral-300 dark:via-white dark:to-white">
        Transforming Challenges Into <br />  <Cover>Opportunities With Expert BPO </Cover>
      </h1>
    </div>
  );
}
