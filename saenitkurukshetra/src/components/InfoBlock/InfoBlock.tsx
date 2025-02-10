import { Card, CardHeader, CardContent } from './CardComponents';
import { GraduationCap, Wrench, Users, Monitor } from 'lucide-react';
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

  return (
    <div className="container">
      <div className='title-section'>
        <h1 className='main-title'>
          Who are <span className='highlight'>We</span>?
        </h1>
      </div>

      <div className='info-grid'>
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

        <Card>
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
        </Card>
      </div>

      <div className='stats-grid'>
        {stats.map((stat, index) => (
          <Card key={index} className='stat-card'>
            <div className='stat-icon'>
              {stat.icon}
            </div>
            <h3 className='stat-title'>{stat.title}</h3>
            <p className='stat-description'>{stat.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;