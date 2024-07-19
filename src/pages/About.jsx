import Footer from "../components/Footer";
import OurTeam from "../components/about/OurTeam";
import StraightForward from "../components/home/StraightForward";
import ThreeOptions from "../components/home/ThreeOptions";

export default function About() {
    return(
        <div>
            <h1 className="h-96 flex items-center justify-center text-6xl font-bold text-white">About</h1>
            <StraightForward />
            <ThreeOptions />
            <OurTeam />
            <Footer />
        </div>
    )
}