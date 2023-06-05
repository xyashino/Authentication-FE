import { SocialButton } from "@ui/SocialButton/SocialButton.tsx";

export const SocialButtonsGroup = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="m-3 w-4/5 select-none border-b-2 border-emerald-50/30 pb-2 text-center text-sm font-bold text-emerald-50/70 font-ligth">
        or continue with these social profile
      </p>
      <div>
        <SocialButton icon="mdi:google" provider="google" />
        <SocialButton icon="mdi:facebook" provider="facebook" />
        <SocialButton icon="mdi:github" provider="github" />
        <SocialButton icon="mdi:linkedin" provider="linkedin" />
      </div>
    </div>
  );
};
