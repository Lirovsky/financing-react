import { NavLink } from 'react-router-dom';
import HeaderImg from '../../img/header.jpg'

export default function Header() {
    return(
        <div className="container py-20 mx-auto items-center gap-10 text-white md:flex md:px-10">
            <div className="w-10/12 mx-auto text-center md:text-left md:w-full lg:w-8/12">
                <h2 className="font-bold text-3xl lg:text-5xl">
                    Smart banking for financial freedom.
                </h2>
                <p className="my-5 text-md xl:w-10/12">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className='my-14 md:my-10'>
                    <NavLink to="/contact" className='py-5 px-7 rounded-md border-transparent border-2 bg-white text-blue-700 font-bold uppercase hover:bg-transparent hover:text-white hover:border-white ease-in-out duration-500'>
                        Contact us
                    </NavLink>
                </div>
            </div>
            <div>
                <img 
                    src={HeaderImg} 
                    alt="Imagem de empresário calculando dinheiro" 
                    className='rounded-xl w-10/12 mx-auto md:w-full'
                />
            </div>
        </div>
    )
}