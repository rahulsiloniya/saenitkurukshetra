import Header from '../Navbar/Navbar';
import TeamsSection from './TeamsSection/TeamsSection';
import HeroSection from './HeroSection/HeroSection';
import Achievement from './Achievement/Achievement';
import Footer from '../Footer/Footer';

const title = () => {
  return (
    <>
    Engineering Dreams.<br />Racing Reality.
    </>
  )
}

const description = () => {
  return (
    <>
     SAE NIT Kurukshetra brings together passionate engineers to design, build, and race cutting-edge vehicles. 
    </>
  )
}

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection ImageSrc="src\assets\hero.jpg" Title={title()} Description={description()} />
      <TeamsSection />
      <Achievement />
      <Footer />
    </div>
  );
};

export default Home;