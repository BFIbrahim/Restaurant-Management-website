import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../mponents/SectionTitle/SectionTitle';

const Categories = () => {
    return (
        <div className='mt-24'>

            <SectionTitle
                heading={"ORDER ONLINE"}
                sabheading={"---From 11:00am to 10:00pm---"}
                
            ></SectionTitle>
            
            <section className='w-5/6 mx-auto p-5 mb-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="" />
                        <h3 className='text-2xl text-white uppercase text-center -mt-12'>slads</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" />
                    <h3 className='md:text-2xl text-white uppercase text-center -mt-12'>Pizzas</h3></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" />
                    <h3 className='md:text-2xl text-white uppercase text-center -mt-12'>Soups</h3></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" />
                    <h3 className='md:text-2xl text-white uppercase text-center -mt-12'>desserts</h3></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" />
                    <h3 className='md:text-2xl text-white uppercase text-center -mt-12'>slads</h3></SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Categories;