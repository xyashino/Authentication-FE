import { Icon } from "@iconify/react";
import { ButtonHTMLAttributes, SyntheticEvent } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: string;
  iconClassName?: string;
  provider: string;
}

const { VITE_BE_URL } = import.meta.env;

export const SocialButton = ({
  icon,
  className,
  iconClassName,
  provider,
  ...rest
}: Props) => {
  const buttonClasses = twMerge(
    "p-2 border-2 rounded-full hover:scale-110 transition-transform m-2",
    className
  );
  const iconClasses = twMerge("text-3xl", iconClassName);
  const handleCLick = async (e: SyntheticEvent) => {
    e.preventDefault();
    window.location.href = `${VITE_BE_URL}/auth/${provider}`;
  };

  return (
    <button className={buttonClasses} {...rest} onClick={handleCLick}>
      <Icon icon={icon} className={iconClasses} color="#fafafa"></Icon>
    </button>
  );
};
