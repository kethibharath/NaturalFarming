import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        // Prevent scroll on full page reload
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        // Scroll only on LINK clicks (PUSH)
        if (navigationType === "PUSH") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
