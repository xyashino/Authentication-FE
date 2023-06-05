import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Icon } from "@iconify/react";
import { useLayoutEffect, useRef, useState } from "react";
import { DropdownMenu } from "./DropdownMenu.tsx";
import { useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";

export const Dropdown = () => {
  const { avatar, fullName } = useRouteLoaderData(
    PageRoute.HOME
  ) as UserResponse;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownToggleClasses = isDropdownOpen
    ? "opacity-100 scale-1"
    : "opacity-0 scale-0";

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:mr-8">
      <button
        className="mr-8 flex h-full w-full cursor-pointer items-center justify-around rounded-xl p-2 hover:bg-neutral-50/60"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Avatar src={avatar ?? undefined} />
        <h2 className="hidden sm:block">{fullName ?? "Unknown"}</h2>
        <Icon
          icon="material-symbols:add-home-work-outline-rounded"
          className="h-8 w-8 text-emerald-900"
        />
      </button>
      <div
        className={`absolute top-full left-0 mt-4 bg-sky-50 w-full rounded transition-all duration-300 ${dropdownToggleClasses}`}
        ref={menuRef}
        tabIndex={0}
      >
        <DropdownMenu />
      </div>
    </div>
  );
};
