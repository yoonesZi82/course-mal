"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer data-[state=checked]:bg-primary dark:bg-input/30 dark:data-[state=checked]:bg-primary disabled:opacity-50 shadow-xs border border-input data-[state=checked]:border-primary aria-invalid:border-destructive focus-visible:border-ring rounded-[4px] outline-none aria-invalid:ring-destructive/20 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:aria-invalid:ring-destructive/40 size-4 data-[state=checked]:text-primary-foreground transition-shadow cursor-pointer disabled:cursor-not-allowed shrink-0",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex justify-center items-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
