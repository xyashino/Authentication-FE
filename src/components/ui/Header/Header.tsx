import { Logo } from "@ui/Logo/Logo.tsx";
import { Dropdown } from "@components/Dropdown/Dropdown.tsx";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 flex w-full items-center justify-between bg-sky-50/70 px-4 shadow">
      <Logo navigateToHome />
      <Dropdown />
    </header>
  );
};
