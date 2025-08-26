import React from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { LucideIcon } from "lucide-react";

interface InputIconProps extends React.ComponentProps<"input"> {
  icon: LucideIcon;
  priceMode?: boolean; // 👈 اینو اضافه کردم برای فرمت عددی
}

function InputIcon({
  icon,
  placeholder,
  priceMode,
  onChange,
  value,
  ...props
}: InputIconProps) {
  const formattedValue =
    priceMode && typeof value === "number"
      ? value.toLocaleString()
      : value ?? "";

  return (
    <div className="flex items-center selection:bg-primary dark:bg-input/30 border border-input rounded-md selection:text-primary-foreground placeholder:text-muted-foreground">
      <div className="flex items-center px-2">
        {React.createElement(icon, { size: 16 })}
      </div>
      <Separator orientation="vertical" />
      <Input
        placeholder={placeholder}
        className="!bg-transparent py-5 !border-0"
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
