import { FaEnvelope, FaChartPie, FaBagShopping } from "react-icons/fa6";
import StraightForwardImg from '../../../public/img/straightforward.jpg'

export default function StraightForward() {

    const options = [
        { 
            id: 1, 
            title: 'Build financial', 
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            icon: <FaEnvelope size={25}/>
        },
        { 
            id: 2, 
            title: 'Invest for the future', 
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            icon: <FaChartPie size={25}/>
        },
        { 
            id: 3, 
            title: 'Responsible banking', 
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            icon: <FaBagShopping size={25}/>
        },
    ];

    return(
        <div className="bg-white md:px-10">
            <div className='container items-center gap-10 py-20 mx-auto lg:flex'>
                <div>
                    <img 
                        src={StraightForwardImg} 
                        alt="Imagem de uma mulher usando um notebook" 
                        className='rounded-xl w-10/12 mx-auto md:w-full'
                    />
                </div>
                <div className="w-10/12 mx-auto mt-10 md:w-full lg:w-8/12 lg:my-10 xl:w-6/12 order-first">
                    <h3 className='font-semibold text-3xl '>
                        Straight-forward way of financing
                    </h3>
                    {options.map((item) => {
                        return(
                            <div key={item.id} className="flex pt-5 gap-5">
                                <div className="text-blue-700 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500">
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}