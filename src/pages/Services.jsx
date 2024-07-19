import CaseStudies from "../components/home/CaseStudies";
import Footer from "../components/Footer";
import OurServices from "../components/home/OurServices";
import WannaTalk from "../components/home/WannaTalk";

export default function Services() {
    return(
        <div>
            <h1 className="h-96 flex items-center justify-center text-6xl font-bold text-white">Our Services</h1>
            <OurServices title={"Featured Services"}/>
            <WannaTalk />
            <CaseStudies title={"Our Services"}/>
            <Footer />
        </div>
    )
}