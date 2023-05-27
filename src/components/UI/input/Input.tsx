import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";

type InputType = "email" | "password" | "number" | "text" | "tel" | "url";

interface Props
  extends Omit<HTMLAttributes<HTMLInputElement>, "type">,
    PropsWithChildren {
  type?: InputType;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  icon: string;
}

export const Input = ({
  type = "text",
  label,
  wrapperClassName = "",
  labelClassName = "",
  icon,
  className,
  children,
  ...rest
}: Props) => {
  const wrapperClasses = twMerge(
    "flex flex-wrap p-2 mx-2 mb-2 select-none",
    wrapperClassName
  );

  const inputClasses = twMerge(
    "py-1 px-2 border-2 border-gray-400 rounded-lg text-gray-600 focus:border-emerald-600 focus:shadow-2xl focus:shadow focus:outline-none text-lg w-full form-input pl-10 transition-colors",
    className
  );

  const labelClasses = twMerge(
    "w-full text-gray-600 pl-2 text-md uppercase font-bold capitalize cursor-pointer",
    labelClassName
  );

  return (
    <div className={wrapperClasses}>
      <label>
        {!!label && <span className={labelClasses}>{label}</span>}
        <div className="relative">
          <input type={type} className={inputClasses} {...rest} />
          <Icon
            color="#64748b"
            icon={icon}
            className="absolute left-0 top-0 h-full py-1.5 px-1 w-10 cursor-pointer hover:scale-110 transition-transform"
          />
          {children}
        </div>
      </label>
    </div>
  );
};
