import { twMerge } from "tailwind-merge";

export const DropdownMenu = () => {
  const listStyles =
    "border-b-2 p-1 hover:bg-emerald-800 hover:text-sky-50 font-bold uppercase text-gray-600 cursor-pointer transition-colors rounded px-2";
  return (
    <ul className="w-full text-sm">
      <li className={listStyles} role="menuitem">
        Account
      </li>
      <li className={listStyles} role="menuitem">
        Edit Profile
      </li>
      <li
        className={twMerge(
          listStyles,
          "text-red-700 border-0 hover:bg-red-800 "
        )}
        role="menuitem"
      >
        Logout
      </li>
    </ul>
  );
};
