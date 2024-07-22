/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

import Image1 from "../../../public/img/latest1.jpg"
import Image2 from "../../../public/img/latest2.jpg"
import Image3 from "../../../public/img/latest3.jpg"

export default function BlogNews() {
    
  const cards = [
    {
      id: 1,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      date: "JUN 20, 2024",
      image: Image1,
      to: "/blogsingle"
    },
    {
      id: 2,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      date: "MAR 5, 2024",
      image: Image2,
      to: "/blogsingle"
    },
    {
      id: 3,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the lind texts.",
      date: "FEV 10, 2024",
      image: Image3,
      to: "/blogsingle"
    },
    {
      id: 4,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the lind texts.",
      date: "AUG 30, 2024",
      image: Image3,
      to: "/blogsingle"
    },
    {
      id: 5,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      date: "APR 18, 2024",
      image: Image1,
      to: "/blogsingle"
    },
    {
      id: 2,
      title: "Behind the word mountains" ,
      paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      date: "MAR 9, 2024",
      image: Image2,
      to: "/blogsingle"
    },
  ];

  return (
    <div className='bg-white py-20'>
      <div className="container px-10 mx-auto md:px-0">
        <div className='gap-5 md:flex md:flex-wrap md:justify-center'>
          {cards.map((item) => {
            return(
              <div key={item.id} className="mb-5 bg-white rounded-lg md:w-[45%] lg:w-[30%] border">
                <div>
                  <img src={item.image} className='w-full h-60 object-cover rounded-t-lg'/>
                </div>
                 <div className="flex flex-col justify-between p-5">
                    <p className='text-gray-500'>
                      {item.date}
                    </p>
                    <h1 className="font-medium text-xl py-4">
                      {item.title}
                    </h1>
                    <p className="text-gray-500 text-base pb-4">
                      {item.paragraph}
                    </p>
                    <NavLink to={item.to} key={item.id} className='text-blue-600 hover:underline'>
                      Read More
                    </NavLink>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex items-center justify-center gap-1 pt-10'>
          <button className='bg-blue-700 w-12 h-12 rounded-full text-white'>1</button>
          <button className='w-12 h-12 rounded-full hover:bg-blue-700 hover:text-white'>2</button>
          <button className='w-12 h-12 rounded-full hover:bg-blue-700 hover:text-white'>3</button>
          <button className='w-12 h-12 rounded-full hover:bg-blue-700 hover:text-white'>4</button>
          <button className='w-12 h-12 rounded-full'>...</button>
          <button className='w-12 h-12 rounded-full hover:bg-blue-700 hover:text-white'>8</button>
        </div>
      </div>
    </div>
  );
}