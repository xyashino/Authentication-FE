import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import { InputProps } from "./input-props.ts";

export const Input = ({
  type = "text",
  label,
  wrapperClassName = "",
  labelClassName = "",
  icon,
  className,
  children,
  ...rest
}: InputProps) => {
  const wrapperClasses = twMerge(
    "flex flex-wrap p-2 mx-2 select-none",
    wrapperClassName
  );

  const inputClasses = twMerge(
    "placeholder:italic placeholder:text-emerald-50/80  w-full bg-transparent transition-colors py-2 px-4 border-2 border-emerald-50/50 rounded-lg text-gray-700 focus:border-emerald-600 focus:shadow-2xl focus:shadow focus:outline-none text-md w-full",
    className
  );

  const labelClasses = twMerge(
    "w-full text-gray-600 pl-2 text-md uppercase font-bold capitalize cursor-pointer",
    labelClassName
  );

  return (
    <div className={wrapperClasses}>
      <label className="w-full">
        {!!label && <span className={labelClasses}>{label}</span>}
        {icon ? (
          <div className="relative">
            <input
              type={type}
              className={`${inputClasses} ${icon ? "pl-10" : ""}`}
              {...rest}
            />
            <Icon
              color="#64748b"
              icon={icon}
              className="absolute top-0 left-0 h-full w-10 cursor-pointer px-1 transition-transform py-1.5 hover:scale-110"
            />
          </div>
        ) : (
          <input type={type} className={inputClasses} {...rest} />
        )}
        {children}
      </label>
    </div>
  );
};
