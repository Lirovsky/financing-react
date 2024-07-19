import { FaEnvelope, FaChartPie, FaBagShopping } from "react-icons/fa6";

export default function ThreeOptions() {
    const cards = [
        { 
            id: 1, 
            icon: <FaBagShopping size={40}/>, 
            title: "Build financial",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        { 
            id: 2, 
            icon: <FaEnvelope size={40}/>, 
            title: "Invest for the future",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        { 
            id: 3, 
            icon: <FaChartPie size={40}/>, 
            title: "Responsible banking",
            paragraph: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
      ];

    return(
        <div className="md:px-10">
            <div className='container items-center mx-auto py-14 text-white lg:flex'>
                <div className="w-10/12 mx-auto gap-10 md:w-full lg:flex">
                    {cards.map(item => (
                        <div key={item.id} className="flex py-5 gap-5">
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-medium text-lg mb-2">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                     ))}
                </div>
            </div>
        </div>
    )
}