import { useRevalidator, useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";
import { Avatar } from "@ui/Avatar/Avatar.tsx";
import { Input } from "@ui/Input/Input.tsx";
import { SyntheticEvent, useState } from "react";
import { UploadImage } from "@components/UploadImage/UploadImage.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { changeAvatar } from "@components/Modals/ChangeAvatar/ChangeAvatar.helper.ts";
import { toast } from "react-hot-toast";

export const ChangeAvatar = () => {
  const { avatar, id } = useRouteLoaderData(PageRoute.HOME) as UserResponse;
  const { revalidate } = useRevalidator();

  const [image, setImage] = useState<null | string | File>(avatar);

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setImage(value);
  };

  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    const avatarPromise = changeAvatar(id, image);
    toast.promise(avatarPromise, {
      loading: "Saving...",
      success: () => {
        revalidate();
        return "Saved!";
      },
      error: (err) => `${err}`,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-around p-2 lg:p-6">
      <h1 className="mb-2 w-full border-b-2 text-left text-3xl font-bold uppercase italic text-slate-800 lg:mb-8">
        Change Avatar:
      </h1>

      <h2 className="w-full p-2 text-center text-xl font-bold uppercase italic lg:p-4">
        You can provide <span className="text-emerald-700">URL</span> or
        <span className="text-emerald-700"> Add Image</span>
      </h2>
      <div className="my-4 select-none px-16 min-w-1/4">
        <Avatar
          className="w-32 lg:w-48"
          src={image instanceof File ? URL.createObjectURL(image) : image}
        />
      </div>

      <Input
        type="url"
        name="avatar"
        id="avatar"
        icon="arcticons:urlsanitizer"
        className="mx-0 w-full border-2 border-emerald-600 px-0"
        wrapperClassName="grow"
        onChange={handleChange}
        value={(image instanceof File ? image.name : image) ?? ""}
      />
      <UploadImage setImage={setImage} />
      <Button className="px-12 py-2 text-2xl uppercase" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};
