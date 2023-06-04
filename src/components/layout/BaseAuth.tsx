import { PropsWithChildren } from "react";
import { Header } from "@ui/Header/Header.tsx";
import { MainWrapper } from "@layout/MainWrapper.tsx";

export const BaseAuth = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};
