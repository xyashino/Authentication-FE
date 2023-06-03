import logo from "@assets/logo.svg";

export const Logo = () => {
  return (
    <div className="flex cursor-pointer select-none items-center justify-center transition-transform hover:scale-110">
      <img src={logo} alt="logo" className="h-16 w-16" draggable={false} />
      <h2 className="text-xl font-bold capitalize text-emerald-900">
        Authentication App
      </h2>
    </div>
  );
};
