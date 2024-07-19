export default function Subscribe() {
    return(
        <div className="w-full mb-5 bg-white rounded-lg sticky top-0 order-3 lg:order-3 lg:w-3/12">
            <div className="flex flex-col justify-between p-5">
                <h3 className='font-bold text-2xl'>
                    Subscribe to Newsletter
                </h3>
                <p className="py-3">
                    Far far away behind the word mountains far from.
                </p>
                <form>
                    <input 
                        type="email" 
                        className="w-full border rounded-md p-2" 
                        placeholder="Enter email"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-700 text-white mt-3 font-bold rounded-md py-3 px-4 border hover:bg-transparent hover:text-blue-700"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    )
}