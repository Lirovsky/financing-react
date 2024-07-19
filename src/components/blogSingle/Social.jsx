import { FaTwitter, FaFacebook, FaPinterest,} from "react-icons/fa6";

export default function Social() {
    return(
        <div className="w-full pb-5 sticky top-0 order-2 lg:order-1 lg:w-2/12">
            <h3 className="text-xl text-center mb-3">
                Share
            </h3>
            <ul className="flex flex-row justify-center items-center gap-5 lg:flex-col">
                <li>
                    <a href="#">
                        <FaFacebook size={50} className="border border-black p-3 rounded-full hover:text-blue-700 hover:border-blue-700"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaTwitter size={50} className="border border-black p-3 rounded-full hover:text-blue-700 hover:border-blue-700"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaPinterest size={50} className="border border-black p-3 rounded-full hover:text-blue-700 hover:border-blue-700"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}