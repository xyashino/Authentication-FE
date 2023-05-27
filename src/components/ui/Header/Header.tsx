import { Logo } from "@ui/Logo/Logo.tsx";
import { Dropdown } from "@components/Dropdown/Dropdown.tsx";

export const Header = () => {
  return (
    <header className="w-full bg-sky-50 top-0 left-0 flex px-4 shadow sticky items-center justify-between">
      <Logo />
      <Dropdown />
    </header>
  );
};
