import { Icon } from "@iconify/react";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  iconClassName?: string;
}

export const SocialButton = ({
  icon,
  className,
  iconClassName,
  ...rest
}: Props) => {
  const buttonClasses = twMerge(
    "p-2 border-2 rounded-full hover:scale-110 transition-transform m-2",
    className
  );
  const iconClasses = twMerge("text-3xl", iconClassName);
  return (
    <button className={buttonClasses} {...rest}>
      <Icon icon={icon} className={iconClasses} color="#64748b"></Icon>
    </button>
  );
};
