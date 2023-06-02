import { SocialButton } from "@ui/SocialButton/SocialButton.tsx";

export const SocialButtonsGroup = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-sm m-3 font-ligth  pb-2 border-b-2 w-4/5 text-center text-emerald-50/70 border-emerald-50/30 font-bold">
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
