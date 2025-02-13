import { Swiper, SwiperSlide } from 'swiper/react';
import './Review.css';
// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const testi = [
    {
        member: "nazia"
    }
]
const Review = () => {
    return (
        <div className='jj h-[450px] mt-20 p-4'>
            <h1 className="text-3xl font-bold text-center mb-10">Reviews</h1>
            <div className="w-[320px] md:w-[500px] mx-auto bg-white bg-opacity-70 text-center">
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-[300px] p-4'>
                            <h1 className='bg-[#ffd700] text-lg font-bold mb-10 text-black p-8'>Nazia</h1>
                            <p className='text-black mx-10'>Absolutely fantastic! Everything was handled professionally and delivered on time. Will definitely use this again.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[300px] p-4'>
                            <h1 className='text-[#ffd700] text-lg font-bold mb-10 bg-black p-8'>Fatima</h1>
                            <p className='text-black mx-10'>Absolutely fantastic! Everything was handled professionally and delivered on time. Will definitely use this again.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[300px] p-4'>
                            <h1 className='bg-[#ffd700] text-lg font-bold mb-10 text-black p-8'>Amatullah</h1>
                            <p className='text-black mx-10'>Absolutely fantastic! Everything was handled professionally and delivered on time. Will definitely use this again.</p>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Review;