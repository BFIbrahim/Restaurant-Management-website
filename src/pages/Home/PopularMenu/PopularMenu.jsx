import { useState } from "react";
import SectionTitle from "../../../mponents/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useState(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populatItems = data.filter(item => item.category === "popular");
                setMenu(populatItems)
            })
    })

    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                sabheading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5 mt-5 mb-5">
                {
                    menu.map(item => <Menuitem
                        key={item._id}
                        item={item}
                    ></Menuitem>

                    )
                }
            </div>
        </section>
    );
};

export default PopularMenu;