import SectionTitle from "../../../mponents/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {

    return (
        <div className="featuredItem bg-fixed mb-5">
            <div className="bg-gray-900 bg-opacity-55 py-14">
                <SectionTitle heading={"From Our Menu"} sabheading={"----Check it out----"}></SectionTitle>

                <div className="md:flex justify-center items-center">
                    <div className="p-14">
                        <img className="rounded-md" src={featuredImg} alt="" />
                    </div>

                    <div className="pe-3 text-white text-center md:text-start">
                        <p>August 27, 2024</p>
                        <p className="uppercase">Where Can I get Some?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veniam aliquam et, earum quam doloribus consequuntur repellat deleniti consequatur ipsam autem tempora culpa repellendus ea quas, non, ullam fuga eveniet?</p>

                        <button className="btn mt-5 bg-transparent border-white border-b-4 border-t-0 border-r-0 border-l-0 text-white font-semibold hover:text-gray-950">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;