import { SocialButton } from "@ui/SocialButton/SocialButton.tsx";

export const SocialButtonsGroup = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-sm m-3 font-ligth text-gray-600 pb-2 border-b-2 w-4/5 text-center">
        or continue with these social profile
      </p>
      <div>
        <SocialButton icon="mdi:google" />
        <SocialButton icon="mdi:facebook" />
        <SocialButton icon="mdi:github" />
        <SocialButton icon="mdi:twitter" />
      </div>
    </div>
  );
};
