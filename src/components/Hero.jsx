import { useState } from 'react';
import Modal from './Model';
import Header from './Header';
import StickyBar from './StickyBar';
import ReferSection from './ReferSection';
import Pricing from './Pricing';
import FAQ from './FAQ';
import GetInTouch from './GetInTouch';
import Footer from './Footer';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex flex-col scroll-smooth">
            <Header />
            <StickyBar />
            <ReferSection />
            <Pricing />
            <FAQ />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default Hero;
