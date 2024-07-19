import Footer from "../components/Footer";
import Header from "../components/home/Header";
import MakePayment from "../components/home/MakePayment";
import ThreeOptions from "../components/home/ThreeOptions";
import StraightForward from "../components/home/StraightForward";
import OurServices from "../components/home/OurServices";
import WannaTalk from "../components/home/WannaTalk";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";
import Latest from "../components/home/Latest";


export default function Home() {
    return(
        <div>
            <Header />
            <MakePayment />
            <ThreeOptions />
            <StraightForward />
            <OurServices title={"Our Services"}/>
            <WannaTalk />
            <CaseStudies title={"Case Studies"}/>
            <Testimonials />
            <Latest />
            <Footer />
        </div>
    )
}