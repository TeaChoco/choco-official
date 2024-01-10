import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const useCancelNavigation = () => {
    const navigate = useNavigate();

    const btnCancel = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return btnCancel;
};

export default useCancelNavigation;
