import { PropsWithChildren } from "react";

export const MainWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-full h-full grow flex flex-col  items-center justify-starts">
      {children}
    </main>
  );
};
