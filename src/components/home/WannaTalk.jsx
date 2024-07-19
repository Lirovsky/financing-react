import { NavLink } from 'react-router-dom';

export default function WannaTalk() {

    return(
        <div className="bg-filter bg-cover bg-center bg-no-repeat bg-fixed md:px-10">
            <div className='container py-20 mx-auto text-white  lg:flex'>
                <div className="flex flex-col items-center gap-10 mx-auto justify-between md:flex-row">
                    <div className='w-8/12 text-center md:text-left'>
                        <h4 className="font-semibold text-3xl mb-4">
                            Wanna Talk To Us?
                        </h4>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>
                    <NavLink to="/contact" className='py-5 px-7 rounded-md border-transparent border-2 bg-white text-blue-700 font-bold uppercase hover:bg-transparent hover:text-white hover:border-white ease-in-out duration-500'>
                        Contact us
                    </NavLink>
                </div>
            </div>
        </div>
    )
}