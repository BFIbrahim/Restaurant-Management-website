import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Nevigation from "../pages/Shared/nevigation/Nevigation";

const Main = () => {
    return (
        <div>
            <Nevigation></Nevigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;