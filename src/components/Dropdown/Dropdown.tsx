import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Icon } from "@iconify/react";
import { useLayoutEffect, useRef, useState } from "react";
import { DropdownMenu } from "./DropdownMenu.tsx";

export const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dropdownToggleClasses = isDropdownOpen
    ? "opacity-100 scale-1"
    : "opacity-0 scale-0";

  useLayoutEffect(() => {
    if (isDropdownOpen && menuRef.current) menuRef.current.focus();
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <button
        className="mr-8 h-full flex items-center hover:bg-gray-300 p-2 justify-around cursor-pointer w-full rounded"
        onClick={() => setIsDropdownOpen(true)}
      >
        <Avatar />
        <h2>test</h2>
        <Icon
          icon="material-symbols:add-home-work-outline-rounded"
          className="w-8 h-8 text-emerald-900"
        />
      </button>
      <div
        className={`absolute top-full left-0 mt-4 bg-sky-50 w-full rounded transition-all duration-300 ${dropdownToggleClasses}`}
        ref={menuRef}
        onBlur={() => setIsDropdownOpen(false)}
        tabIndex={0}
      >
        <DropdownMenu />
      </div>
    </div>
  );
};
