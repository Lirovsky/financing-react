/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/css/bundle';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5173/public/carousel2.json')
        .then((response) => response.json())
        .then(setData);
    }, []);
  
    if (!data || !data.length) return null;

  return (
    <div className='bg-white/95 pb-20 border-t-2 border-white/95'>
        <div className="px-10 container mx-auto ">
            <div className="w-full text-center mx-auto py-14 md:w-5/6 lg:w-3/6">
                <h3 className="font-bold text-blue-700 text-3xl mb-3">
                    Testimonials
                </h3>
            </div>
            <div className="scroll-smooth">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={false}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item) => {
                        return(
                            <SwiperSlide key={item.id}>
                                <div className="bg-white rounded-lg md:flex">
                                    <div>
                                        <img src={item.image} className='h-96 w-full md:h-full'/>
                                    </div>
                                    <div className="flex flex-col justify-evenly p-10 gap-5 md:p-20 md:w-10/12 lg:w-8/12">
                                        <p className="italic">
                                            {item.paragraph}
                                        </p>
                                        <div>
                                            <p className='font-bold'>
                                                {item.name}
                                            </p>
                                            <p className='text-gray-500'>
                                                {item.charge}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </div>
  );
}