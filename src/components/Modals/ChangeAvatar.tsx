import { useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { SyntheticEvent, useState } from "react";
import { UploadImage } from "@components/UploadImage/UploadImage.tsx";
import { Button } from "@ui/Button/Button.tsx";

export const ChangeAvatar = () => {
  const { avatar } = useRouteLoaderData(PageRoute.HOME) as UserResponse;

  const [image, setImage] = useState(avatar);

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setImage(value);
  };

  return (
    <div className="p-5 flex  flex-wrap justify-around items-center">
      <h1 className="text-3xl italic font-bold uppercase mb-8 border-b-2 text-slate-800 text-left w-full">
        Change Avatar:
      </h1>

      <h2 className="w-full p-2 text-center text-xl uppercase font-bold italic">
        You can provide <span className="text-emerald-700">URL</span> or
        <span className="text-emerald-700"> Add Image</span>
      </h2>
      <div className="min-w-1/4 px-16 select-none">
        <Avatar className="w-52" src={image ?? undefined} />
      </div>

      <Input
        type="url"
        name="avatar"
        id="avatar"
        icon="arcticons:urlsanitizer"
        className="border-2 border-emerald-600 w-full"
        wrapperClassName="grow"
        onChange={handleChange}
        value={image ?? ""}
      />
      <UploadImage setUrl={setImage} />
      <Button className="text-2xl uppercase px-12 py-2">Save</Button>
    </div>
  );
};
