import { Card, CardHeader, CardContent } from './CardComponents';
import { GraduationCap, Wrench, Users, Monitor } from 'lucide-react';
import { Bolt, Cpu, Code } from "lucide-react";
import Options from './Options';
import './InfoBlock.css';

const InfoBlock = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Since 2010",
      description: "North India's largest automobile workshop"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "700+ Candidates",
      description: "Participation in last physical workshop"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diverse Projects",
      description: "From 2-stroke engines to V6 Porsche"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "E-Autokriti",
      description: "Digital edition with enhanced features"
    }
  ];

  const options = [
    {
      icon: <Wrench className="icon" />,
      title: "Combustion Vehicle",
      description: "Dive deep into traditional combustion engines"
    },
    {
      icon: <Bolt className="icon" />,
      title: "Electric Vehicle",
      description: "Explore the technology behind electric mobility"
    },
    {
      icon: <Cpu className="icon" />,
      title: "IoT",
      description: "Learn how IoT integrates with automotive innovations"
    },
    {
      icon: <Code className="icon" />,
      title: "Software",
      description: "Discover the software driving modern vehicles"
    }
  ];

  return (
    <div className="container">
      <div className='title-section'>
        <h1 className='main-title'>
          Who are <span className='highlight'>We</span>?
        </h1>
      </div>

      <div>  {/* className='info-grid' */}
        <Card>
          <CardHeader className='card-header'>
            <h2 className='card-title'>About Autokriti</h2>
          </CardHeader>
          <CardContent className='card-content'>
            <p className='card-text'>
              Autokriti is north India's largest automobile workshop, established in 2010. 
              We provide hands-on experience with industrial vehicles, from basic scooter engines 
              to advanced turbocharged Porsche systems. Our workshop caters to both gearheads 
              and technology enthusiasts from all branches.
            </p>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader className='card-header'>
            <h2 className='card-title'>Digital Evolution</h2>
          </CardHeader>
          <CardContent className='card-content'>
            <p className='card-text'>
              E-Autokriti represents our digital transformation, continuing our legacy of 
              knowledge sharing in the digital space. With e-autokriti 2.0, we're expanding 
              our reach and enhancing engagement through innovative online learning experiences.
            </p>
          </CardContent>
        </Card> */}
      </div>
      
      <Options children={stats} />
      {/* <div className='stats-grid'>
        {stats.map((stat, index) => (
          <Card key={index} className='stat-card'>
            <div className='stat-icon'>
              {stat.icon}
            </div>
            <h3 className='stat-title'>{stat.title}</h3>
            <p className='stat-description'>{stat.description}</p>
          </Card>
        ))}
      </div> */}

      <Card>
          <CardHeader className='card-header'>
            <h2 className='card-title'>What's Inside?</h2>
          </CardHeader>
          <CardContent className='card-content'>
            <p className='card-text'>
            Passionate about automobiles but unsure where to start? Let Autokriti be your 
            launchpad into the future of mobility! From dismantling engines to decoding the latest 
            in automotive tech, we’ve evolved into North India’s largest automotive workshop—and 
            this year, we’re taking things even further.
            </p>
            <br />
            <p className='card-text'>
            Keep your heads up for the latest edition of Autokriti this year.
            </p>
          </CardContent>
      </Card>

        <Options children={options} />
        {/* <div className='stats-grid'>
          {options.map((option, index) => (
            <Card key={index} className='stat-card'>
              <div className='stat-icon'>
                {option.icon}
              </div>
              <h3 className='stat-title'>{option.title}</h3>
              <p className='stat-description'>{option.description}</p>
            </Card>
          ))}
        </div> */}
    </div>
  );
};

export default InfoBlock;