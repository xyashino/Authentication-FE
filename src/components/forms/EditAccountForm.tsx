import { Input } from "@ui/Input/Input.tsx";
import { TextArea } from "@ui/TextArea/TextArea.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SyntheticEvent } from "react";

export const EditAccountForm = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
      <Input placeholder="John Smith" label="Name" wrapperClassName="w-4/5" />

      <TextArea
        description="Bio"
        wrapperClassName="w-4/5"
        placeholder="Enter your bio..."
      />

      <Input
        placeholder="123-123-123"
        type="tel"
        label="Phone"
        wrapperClassName="w-4/5"
      />

      <Input
        placeholder="example@mail.com"
        type="email"
        label="Email"
        wrapperClassName="w-4/5"
      />

      <Input
        placeholder="Enter new password... "
        type="password"
        label="password"
        wrapperClassName="w-4/5"
      />

      <Button className="px-8 py-2 text-xl w-1/3">Save</Button>
    </form>
  );
};
