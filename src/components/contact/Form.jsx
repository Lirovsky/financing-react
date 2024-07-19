import { BsFillGeoAltFill, BsClockFill, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import {useForm} from 'react-hook-form';

export default function Form() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    const handleFormSubmit= (data) => {
        console.log(data)
    }
    return(
        <div className="bg-white md:px-10">
            <div className='flex flex-col  justify-center gap-20 py-20 px-10 mx-auto md:px-0 lg:flex-row'>
                <div className="flex flex-col gap-5 text-gray-500">
                    <div className="flex items-center gap-5">
                        <BsFillGeoAltFill size={50} className="text-blue-100 bg-blue-700 rounded-full p-3"/>
                        <div>
                            <h5 className="text-xl pb-2">
                                Location
                            </h5>
                            <p>
                                43 Raymouth Rd. Baltemoer, 
                            </p>
                            <p>
                                London 3910
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <BsClockFill size={50} className="text-blue-100 bg-blue-700 rounded-full p-3"/>
                        <div>
                            <h5 className="text-xl pb-2">
                                Open Hours:
                            </h5>
                            <p>
                                Sunday-Friday:
                            </p>
                            <p>
                                11:00 AM - 2300 PM
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <BsEnvelopeFill size={50} className="text-blue-100 bg-blue-700 rounded-full p-3"/>
                        <div>
                            <h5 className="text-xl pb-2">
                                Email:
                            </h5>
                            <p>
                                info@Untree.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-2">
                        <BsFillTelephoneFill size={50} className="text-blue-100 bg-blue-700 rounded-full p-3"/>
                        <div>
                            <h5 className="text-xl pb-2">
                                Call:
                            </h5>
                            <p>
                            +1 1234 55488 55
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="w-full lg:w-7/12">
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-col gap-3 lg:flex-row">
                            <div className="flex flex-col w-full">
                                <input 
                                    {...register('name', {required: true, minLength: 3, maxLength: 20})} 
                                    type="text" 
                                    className="w-full border rounded-md p-2" 
                                    placeholder="Your Name"
                                />
                                {errors.name?.type === 'required' && <p>Campo obrigatório</p>}
                                {errors.name?.type === 'minLength' && <p>Precisa ter 3 caracteres</p>}
                            </div>
                            <div className="flex flex-col w-full">
                            <input 
                                {...register('lastName', {required: true, minLength: 3, maxLength: 20})} 
                                type="text" 
                                className="w-full border rounded-md p-2" 
                                placeholder="Your Last Name"
                            />
                            {errors.lastName?.type === 'required' && <p>Campo obrigatório</p>}
                            {errors.lastName?.type === 'minLength' && <p>Precisa ter 3 caracteres</p>}

                            </div>

                        </div>
                        <input 
                            {...register('email', {required: true})} 
                            type="email" 
                            className="w-full border rounded-md p-2" 
                            placeholder="Your Email"
                        />
                        {errors.email?.type === 'required' && <p>Campo obrigatório</p>}
                        <input 
                            {...register('subject', {required: true, minLength: 10})} 
                            type="text" 
                            className="w-full border rounded-md p-2" 
                            placeholder="Subject"
                        />
                        {errors.subject?.type === 'required' && <p>Campo obrigatório</p>}
                        {errors.subject?.type === 'minLength' && <p>Precisa ter 10 caracteres</p>}
                        <textarea 
                            {...register('message', {required: true})} 
                            type="text" 
                            className="w-full border rounded-md p-2 h-32 resize-none" 
                            placeholder="Message"
                        />
                        {errors.message?.type === 'required' && <p>Campo obrigatório</p>}

                        <button 
                            type="submit" 
                            className="w-56 py-4 px-4 bg-blue-700 text-white font-bold rounded-lg border hover:bg-transparent hover:text-blue-700"
                        >
                             SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}