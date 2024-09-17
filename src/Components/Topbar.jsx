import { useContext } from "react";
import { BasicContext } from "../ContextApis/BasicProvider";
import { RiMenuFold3Line, RiMenuFold4Line } from "react-icons/ri";


function Topbar() {
    const { sidebarOpen, setSideBarOpen } = useContext(BasicContext);
    return (

        <div className="bg-primary py-p_xs px-p_sm flex items-center gap-g_lg">
            <div className="hidden lg:flex gap-g_sm">
                {!sidebarOpen ? <RiMenuFold3Line onClick={() => setSideBarOpen(!sidebarOpen)} className="text-text_xl hover:cursor-pointer hover:text-secondary duration-200" /> :
                    <RiMenuFold4Line onClick={() => setSideBarOpen(!sidebarOpen)} className="text-text_xl hover:cursor-pointer hover:text-secondary duration-200" />}
            </div>
            <div>Link</div>
        </div>
    );
}

export default Topbar;
