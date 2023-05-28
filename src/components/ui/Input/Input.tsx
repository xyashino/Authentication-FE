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
    `placeholder:font-bold placeholder:text-emerald-50/80  w-full bg-transparent transition-colors py-2 px-4 border-2 border-emerald-50/50 rounded-lg text-gray-700 focus:border-emerald-600 focus:shadow-2xl focus:shadow focus:outline-none text-md w-full form-Input ${
      icon ? "pl-10" : ""
    }}`,
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
            <input type={type} className={inputClasses} {...rest} />
            <Icon
              color="#64748b"
              icon={icon}
              className="absolute left-0 top-0 h-full py-1.5 px-1 w-10 cursor-pointer hover:scale-110 transition-transform"
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
