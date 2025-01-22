import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }, [location.pathname]); // Trigger when the pathname changes

    return null; // No visual output
};

export default ScrollToTop;
