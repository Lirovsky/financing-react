/* eslint-disable react/prop-types */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image1 from "../../../public/img/carousel1.jpg"
import Image2 from "../../../public/img/carousel2.jpg"
import Image3 from "../../../public/img/carousel3.jpg"
import Image4 from "../../../public/img/carousel4.jpg"

export default function CaseStudies({title}) {
    const carousel1 = [
      {
        "id": "1",
        "name": "Behind the word mountains" ,
        "paragraph": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "image": Image1
      },
      {
        "id": "2",
        "name": "Behind the word mountains" ,
        "paragraph": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "image": Image2
      },
      {
        "id": "3",
        "name": "Behind the word mountains" ,
        "paragraph": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "image": Image3
      },
      {
        "id": "4",
        "name": "Behind the word mountains" ,
        "paragraph": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "image": Image4
      }
    ]

    function SampleNextArrow(props) {
        const {onClick} = props;
        return (
            <div>
                <div onClick={onClick} className="next-slick-arrow absolute mx-2 bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer" style={{top: "-70px", left: "50%"}}>
                    NEXT
                </div>
          </div>
        );
    }
    function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
            <div>
                <div onClick={onClick} className="next-slick-arrow absolute mx-2 bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer" style={{top: "-70px", right: "50%"}}>
                    PREV
                </div>
          </div>
        );
    }
    var settings = {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <div className='bg-white py-20'>
        <div className="container mx-auto">
            <div className="w-full text-center mx-auto pb-14 px-10 md:w-5/6 lg:w-4/6">
                <h3 className="font-bold text-blue-700 text-3xl mb-3">
                    {title}
                </h3>
                <p className="text-gray-500">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>

            <div className="scroll-smooth pt-14 px-10">
                <div>
                    <Slider {...settings}>
                        {carousel1.map((item) => {
                        return(
                            <div key={item.id} className="bg-white rounded-lg border">
                                <div>
                                    <img src={item.image} className='w-full h-52 object-cover rounded-t-lg'/>
                                </div>
                                <div className="flex flex-col justify-evenly p-5">
                                    <h1 className="font-medium text-xl pb-5">
                                        {item.name}
                                    </h1>
                                    <p className="text-gray-500">
                                      {item.paragraph}
                                    </p>
                                </div>
                            </div>
                          )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  );
}