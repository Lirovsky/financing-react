import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaDribbble } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function Footer() {
    const links1 = [
        { 
            id: 1, 
            contact: "+1(123)-456-7890",
        },
        { 
            id: 2, 
            contact: "+1(123)-456-7890",
        },
        { 
            id: 3, 
            contact: "info@mydomain.com",
        },
    ];

    const links2 = [
        { 
            id: 1, 
            link: "About Us",
            to: "/"
        },
        { 
            id: 2, 
            link: "Services",
            to: "/"
        },
        { 
            id: 3, 
            link: "Vision",
            to: "/"
        },
        { 
            id: 4, 
            link: "Mission",
            to: "/"
        },
        { 
            id: 5, 
            link: "Terms",
            to: "/"
        },
        { 
            id: 6, 
            link: "Privacy",
            to: "/"
        },
    ];

    const links3 = [
        { 
            id: 1, 
            link: "Partners",
            to: "/"
        },
        { 
            id: 2, 
            link: "Business",
            to: "/"
        },
        { 
            id: 3, 
            link: "Careers",
            to: "/"
        },
        { 
            id: 4, 
            link: "Blog",
            to: "/"
        },
        { 
            id: 5, 
            link: "FAQ",
            to: "/"
        },
        { 
            id: 6, 
            link: "Creative",
            to: "/"
        },
    ];

    const links4 = [
        { 
            id: 1, 
            link: "Our Vision",
            to: "/"
        },
        { 
            id: 2, 
            link: "About Us",
            to: "/"
        },
        { 
            id: 3, 
            link: "Contact Us",
            to: "/"
        },
    ];

    const links5 = [
        { 
            id: 1, 
            icon: <FaInstagram/>,
            to: "/"
        },
        { 
            id: 2, 
            icon: <FaTwitter/>,
            to: "/"
        },
        { 
            id: 3, 
            icon: <FaFacebook/>,
            to: "/"
        },
        { 
            id: 4, 
            icon: <FaLinkedin/>,
            to: "/"
        },
        { 
            id: 5, 
            icon: <FaPinterest/>,
            to: "/"
        },
        { 
            id: 6, 
            icon: <FaDribbble/>,
            to: "/"
        },
    ];

    return(
        <div className="px-20 text-white md:pt-20">
            <div className='container py-20 mx-auto md:py-5 lg:flex'>
                <div className="flex flex-col justify-evenly gap-10 mx-auto md:flex-row">
                    <div className="w-full md:w-2/6">
                        <h3 className="pb-3 text-lg font-semibold">
                            ABOUT
                        </h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <address className="pt-5 pb-3">
                            <p>
                                43 Raymouth Rd. Baltemoer,
                                London 3910
                            </p>
                        </address>
                        <ul className="text-gray-400">
                            {links1.map(item => (
                                <li key={item.id} className="mb-2">
                                    <a href="#" className="hover:text-white">
                                        {item.contact}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-3 text-lg font-semibold">
                            COMPANY
                        </h3>
                        <div className="flex gap-10 text-gray-400">
                            <ul>
                                {links2.map(item => (
                                    <li key={item.id} className="mb-2">
                                        <NavLink to={item.to} className="hover:text-white">
                                            {item.link}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {links3.map(item => (
                                    <li key={item.id} className="mb-2">
                                        <NavLink to={item.to} className="hover:text-white">
                                            {item.link}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="pb-3 text-lg font-semibold">
                            NAVIGATION
                        </h3>
                        <ul className="text-gray-400">
                            {links4.map((item) => (
                                <li key={item.id} className="mb-2">
                                    <NavLink to={item.to} className="hover:text-white">
                                        {item.link}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <h3 className="pt-10 text-lg font-semibold">
                            SOCIAL
                        </h3>
                        <ul className="flex flex-wrap pt-3 gap-3 w-4/6 lg:w-full">
                            {links5.map((item) => (
                                <li key={item.id}>
                                    <NavLink to={item.to}>
                                        <div className="text-2xl">
                                            {item.icon}
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-20">
                <p>
                    Copyright ©2024. All Rights Reserved. — Designed with love by <a href="https://untree.co" className="text-gray-400 hover:text-white">Untree.co</a>
                </p>
            </div>
        </div>
    )
}