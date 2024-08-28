import SectionTitle from "../../../mponents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testemonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={"TESTIMONIALS"} sabheading={"----What Our Clients Say----"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className="text-center px-5 md:px-40 mt-5">
                            <Rating className=" mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h2 className="text-2xl mt-5 font-semibold mb-5 text-orange-300">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testemonial;