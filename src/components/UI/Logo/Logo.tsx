import logo from "../../../assets/logo.svg";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center select-none cursor-pointer hover:scale-110 transition-transform">
      <img src={logo} alt="logo" className="w-16 h-16" draggable={false} />
      <h2 className="capitalize font-bold text-xl text-emerald-900">
        Authentication App
      </h2>
    </div>
  );
};
