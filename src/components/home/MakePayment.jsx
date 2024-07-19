import { FaEnvelope, FaChartPie } from "react-icons/fa6";
import MakePaymentImg from '../../img/makepayment.jpg'

export default function MakePayment() {

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
      ];

    return(
        <div className="bg-white md:px-10">
            <div className='container items-center gap-10 py-20 mx-auto lg:flex'>
                <div>
                    <img 
                        src={MakePaymentImg} 
                        alt="Imagem de uma familia guardando dinheiro em um cofrinho" 
                        className='rounded-xl w-10/12 mx-auto md:w-full'
                    />
                </div>
                <div className="w-10/12 mx-auto mt-10 md:w-full lg:w-8/12 xl:w-6/12">
                    <h3 className='font-semibold text-3xl'>
                        Make payment fast and smooth.
                    </h3>
                    <p className="my-2 text-gray-500">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    {options.map((item) => {
                        return(
                            <div key={item.id} className="flex pt-5 gap-3">
                                <div className="text-blue-700 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-md text-gray-500">
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