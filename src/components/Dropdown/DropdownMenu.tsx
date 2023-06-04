import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { Icon } from "@iconify/react";

export const DropdownMenu = () => {
  const listStyles =
    "text-lg border-b-2 p-1 hover:bg-emerald-800 hover:text-sky-50 font-bold uppercase text-gray-600 cursor-pointer transition-colors rounded px-2 flex items-center";
  return (
    <nav className="flex w-full flex-col text-sm shadow-xl">
      <NavLink to={PageRoute.PROFILE} role="menuitem" className={listStyles}>
        <Icon icon="mdi:account" className="mr-2" />
        ACCOUNT
      </NavLink>
      <NavLink
        to={PageRoute.PROFILE_EDIT}
        role="menuitem"
        className={listStyles}
      >
        <Icon icon="mdi:edit" className="mr-2" />
        Edit Profile
      </NavLink>
      <button
        className={twMerge(
          listStyles,
          "text-red-700 border-0 hover:bg-red-800 "
        )}
        role="menuitem"
      >
        <Icon icon="mdi:logout" className="mr-2" />
        Logout
      </button>
    </nav>
  );
};
