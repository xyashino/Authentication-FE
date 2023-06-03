import { PropsWithChildren } from "react";

export const MainWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex h-full w-full grow flex-col items-center justify-starts">
      {children}
    </main>
  );
};
