import { Button } from "@ui/Button/Button.tsx";
import { SyntheticEvent } from "react";
import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { toast } from "react-hot-toast";
import { Api } from "@enums/api.enum.ts";

interface Props {
  closeModal: () => void;
}

export const Logout = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const handleLogout = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await AxiosSetup.delete(Api.LOGOUT);
      closeModal();
      toast.success("Logged out successfully!");
      navigate(PageRoute.LOGIN);
    } catch (e) {
      navigate(PageRoute.LOGIN);
    }
  };

  return (
    <div className="p-2 lg:p-4">
      <h1 className="mb-4 border-b-2 text-lg font-bold uppercase italic text-emerald-700 lg:text-2xl">
        Are you sure you want to logout? <br />
      </h1>
      <div className="flex grow justify-end">
        <Button
          className="mx-4 border-b-2 bg-transparent uppercase text-black shadow-none shadow-emerald-700 text-md hover:shadow-2xl lg:px-12"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button className="uppercase text-md lg:px-12" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
