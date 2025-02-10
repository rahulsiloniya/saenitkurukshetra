import './Autokriti.css';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HomePage/HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import InfoBlock from '../InfoBlock/InfoBlock';

const title = () => {
    return (
        <>
        AutoKriti 15
        {/* North India's Largest<br />College Motorsport Workshop */}
        </>
    )
}

const description = () => {
    return (
        <>
        The ultimate hands-on experience in automotive technology.<br />This is where passion meets performance!
        </>
    )
}

const Autokriti = () => {
  return (
    <>
    <Navbar />
    <HeroSection ImageSrc="src\assets\autokriti_hero.jpg" Title={title()} Description={description()} />
    <InfoBlock />
    <Footer />
    </>
  )
};

export default Autokriti;