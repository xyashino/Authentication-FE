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
    <div className="lg:p-4 p-2">
      <h1 className="lg:text-2xl text-lg uppercase font-bold italic text-emerald-700 mb-4 border-b-2">
        Are you sure you want to logout? <br />
      </h1>
      <div className="flex justify-end grow">
        <Button
          className="text-md uppercase lg:px-12 border-b-2 mx-4 text-black bg-transparent shadow-none hover:shadow-2xl  shadow-emerald-700"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button className="text-md uppercase lg:px-12" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
