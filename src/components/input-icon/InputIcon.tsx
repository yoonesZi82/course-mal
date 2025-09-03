import React from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputIconProps extends React.ComponentProps<"input"> {
  icon: LucideIcon;
  priceMode?: boolean;
  classNames?: {
    input?: string;
    icon?: string;
    box?: string;
  };
}

function InputIcon({
  icon,
  placeholder,
  priceMode,
  onChange,
  value,
  classNames,
  ...props
}: InputIconProps) {
  const formattedValue =
    priceMode && typeof value === "number"
      ? value.toLocaleString()
      : (value ?? "");

  return (
    <div
      className={cn(
        "flex items-center selection:bg-primary dark:bg-input/30 shadow-xs border border-input rounded-md selection:text-primary-foreground placeholder:text-muted-foreground",
        classNames?.box,
      )}
    >
      <div className={cn("flex items-center px-2", classNames?.icon)}>
        {React.createElement(icon, { size: 16 })}
      </div>
      <Separator orientation="vertical" />
      <Input
        placeholder={placeholder}
        className={cn(
          "!bg-transparent !shadow-none py-5 !border-0 !rounded-none focus-visible:ring-0 focus-visible:ring-offset-0",
          classNames?.input,
        )}
        value={formattedValue}
        onChange={(e) => {
          if (priceMode) {
            const raw = e.target.value.replace(/,/g, "");
            const num = Number(raw);
            if (!isNaN(num)) {
              onChange?.({
                ...e,
                target: { ...e.target, value: num.toString() },
              } as React.ChangeEvent<HTMLInputElement>);
            }
          } else {
            onChange?.(e);
          }
        }}
        {...props}
      />
    </div>
  );
}

export default InputIcon;
