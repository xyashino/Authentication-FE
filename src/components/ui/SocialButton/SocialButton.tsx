import { Icon } from "@iconify/react";
import { ButtonHTMLAttributes, SyntheticEvent } from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { toast } from "react-hot-toast";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: string;
  iconClassName?: string;
  provider: string;
}

const { VITE_BE_URL } = import.meta.env;
const windowWidth = 500;
const windowHeight = 600;
const windowLeft = window.screen.width / 2 - windowWidth / 2;
const windowTop = window.screen.height / 2 - windowHeight / 2;

export const SocialButton = ({
  icon,
  className,
  iconClassName,
  provider,
  ...rest
}: Props) => {
  const navigate = useNavigate();
  const buttonClasses = twMerge(
    "p-2 border-2 rounded-full hover:scale-110 transition-transform m-2",
    className
  );
  const iconClasses = twMerge("text-3xl", iconClassName);
  const handleCLick = async (e: SyntheticEvent) => {
    e.preventDefault();

    const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`;
    const handleEvent = ({ data, origin }: MessageEvent) => {
      window.removeEventListener("message", handleEvent);
      if (origin === window.location.origin) {
        if (data.event === "customEvent") {
          if (data.data) return navigate(PageRoute.HOME);
        }
        toast.error("Something went wrong!");
      }
    };
    window.addEventListener("message", handleEvent);
    window.open(`${VITE_BE_URL}/auth/${provider}`, "_blank", windowFeatures);
  };

  return (
    <button className={buttonClasses} {...rest} onClick={handleCLick}>
      <Icon icon={icon} className={iconClasses} color="#fafafa"></Icon>
    </button>
  );
};
