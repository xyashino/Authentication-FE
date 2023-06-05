import logo from "@assets/logo.svg";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

interface Props {
  navigateToHome?: true;
}

export const Logo = ({ navigateToHome }: Props) => {
  const navigate = useNavigate();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    navigateToHome && navigate(PageRoute.HOME);
  };
  return (
    <button
      className="appearance-none flex cursor-pointer select-none items-center justify-center transition-transform hover:scale-110"
      onClick={handleClick}
    >
      <img
        src={logo}
        alt="logo"
        className="aspect-square w-8 lg:w-16"
        draggable={false}
      />
      <h2 className="italic font-bold capitalize text-emerald-900 lg:text-xl">
        Authentication App
      </h2>
    </button>
  );
};
