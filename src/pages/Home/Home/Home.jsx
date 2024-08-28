import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import ParallaxDes from "../ParallaxDes/ParallaxDes";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testemonial from "../Testemonials/Testemonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ParallaxDes></ParallaxDes>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testemonial></Testemonial>
        </div>
    );
};

export default Home;