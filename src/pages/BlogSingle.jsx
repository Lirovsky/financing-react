import Social from "../components/blogSingle/Social";
import Article from '../components/blogSingle/Article';
import Subscribe from "../components/blogSingle/Subscribe";
import Footer from "../components/Footer";

export default function BlogSingle() {
    return(
        <div>
            <div className="h-96 flex flex-col items-center justify-center gap-5 text-center text-white">
                <p>
                    by <span className="text-gray-400">Admin</span> on <span className="text-gray-400">Apr 4th, 2024</span>
                </p>
                <h1 className="w-9/12 text-4xl font-bold  md:text-6xl">
                    US dollar at risk of losing dominance
                </h1>
            </div>
            <div className="flex flex-col items-start justify-center gap-10 py-20 px-10 bg-white/95 lg:flex-row">
                <Social />
                <Article />
                <Subscribe />
            </div>
            <Footer />
        </div>
    )
}