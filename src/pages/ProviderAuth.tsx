import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { toast } from "react-hot-toast";

interface Props {
  isSuccessful: boolean;
}

export const ProviderAuth = ({ isSuccessful }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessful) {
      toast.success("You have successfully logged in");
      return navigate(PageRoute.PROFILE);
    }
    toast.error("Something went wrong");
    return navigate(PageRoute.LOGIN);
  }, [isSuccessful, navigate]);
  return null;
};
