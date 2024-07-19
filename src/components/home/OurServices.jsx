/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { BsCashCoin, BsChatText, BsFingerprint, BsGear, BsGraphUpArrow, BsLayers } from "react-icons/bs";

export default function OurServices({title}) {

    const cards = [
        { 
            id: 1, 
            icon: <BsCashCoin size={50}/>, 
            title: "Build financial",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
        { 
            id: 2, 
            icon: <BsChatText size={50}/>, 
            title: "Invest for the future",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
        { 
            id: 3, 
            icon: <BsFingerprint size={50}/>, 
            title: "Responsible banking",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
        { 
            id: 4, 
            icon: <BsGear size={50}/>, 
            title: "Payments & Cards",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
        { 
            id: 5, 
            icon: <BsGraphUpArrow size={50}/>, 
            title: "Strategic Finance",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
        { 
            id: 6, 
            icon: <BsLayers size={50}/>, 
            title: "Digital Currency",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            to: "/",
        },
      ];

    return(
        <div className="bg-white/95 border-t-2 border-white">
            <div className='container items-center gap-10 py-20 mx-auto'>
                <div className="w-10/12 mx-auto md:w-full">
                    <div className="w-full text-center mx-auto mb-10 md:w-5/6 lg:w-3/6">
                        <h3 className="font-bold text-blue-700 text-3xl mb-3">
                            {title}
                        </h3>
                        <p className="text-gray-500">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 ">
                        {cards.map(item => (
                            <div key={item.id} className="h-[350px] px-4 rounded-xl bg-white flex flex-col items-center justify-evenly text-center md:w-[350px] lg:w-[300px] xl:w-[400px]">
                                <div className="text-blue-700">
                                    {item.icon}
                                </div>
                                <h5 className="font-medium text-xl">
                                    {item.title}
                                </h5>
                                <p className="text-gray-500">
                                    {item.paragraph}
                                </p>
                                <NavLink to={item.to} className='px-7 py-2 rounded-lg border-2 text-blue-700 font-bold uppercase hover:bg-blue-700 hover:text-white ease-in-out duration-500'>
                                    Read More
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}