import LoginCard from "./LoginCard/LoginCard";
import ProductCard from "./ProductCard/ProductCard";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import SalesCard from "./SalesCard/SalesCard";


const Home = () => {
    return (
        <div className="z-10 ">
            <div>
                <h1>Default</h1>
                <p>Home | Dashboards | Default</p>
            </div>
            <hr />
            <div>
                <SalesCard />
            </div>
            <div className="">
                <ProductCard />
            </div>
            <div className="pb-6">
                <ProfileStatus />
            </div>
            <div className="pb-6">
                <LoginCard />
            </div>
            <hr className="" />
            <div className="flex bg-white items-center py-[35px] justify-between pr-[28px]">
                <h1 className="text-[#909090] text-[13.6px]">ColoredStrategies 2020</h1>
                <p className="text-[#145388] text-[12.8px]">Review | Purchase | Docs</p>
            </div>
        </div>
    );
};

export default Home;