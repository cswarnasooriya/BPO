import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>

      <h1 className="text-4xl md:text-7xl 

       font-semibold
        max-w-8xl 
        mx-auto
        py-4  
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-900 dark:from-neutral-300 dark:via-white dark:to-white">
        Transforming Challenges Into <br /> 
        
         <Cover className="md:text-6xl text-4xl px-10 py-6">Opportunities With Expert BPO </Cover>

      </h1>

    </div>
  );
}
