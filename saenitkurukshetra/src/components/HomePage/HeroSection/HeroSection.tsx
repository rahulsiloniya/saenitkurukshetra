import { ChevronDown } from 'lucide-react';
import './HeroSection.css';
import { ReactNode } from 'react';

interface Props {
  ImageSrc: string;
  Title: ReactNode;
  Description: ReactNode;
}

const HeroSection = ({ ImageSrc, Title, Description }: Props) => {
  return (
    <div className="hero-section">
      <div className="hero-overlay" />
      <img 
        src={ImageSrc} 
        alt="Race car on track" 
        className="hero-image"
      />
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
              {Title} {/* Engineering Dreams.<br />Racing Reality. */}
          </h1>
          <p className="hero-description">
            {Description} {/* SAE NIT Kurukshetra brings together passionate engineers to design, build, and race cutting-edge vehicles. */}
          </p>
          <button className="hero-button">
            Discover More
          </button>
        </div>
      </div>
      <ChevronDown className="hero-scroll-icon" />
    </div>
  );
};

export default HeroSection;