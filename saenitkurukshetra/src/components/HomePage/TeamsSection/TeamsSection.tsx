// src/components/TeamsSection/TeamsSection.jsx
import TeamCard from './TeamCard';
import './TeamsSection.css';

const TeamsSection = () => {
  const teams = [
    {
      name: 'Team Nitrox',
      description: 'Pushing the boundaries of combustion engine technology',
      image: 'src\\assets\\nitrox.jpg'
    },
    {
      name: 'Team Accelerons',
      description: 'Pioneering electric vehicle innovation',
      image: 'src\\assets\\accelerons.jpg'
    }
  ];

  return (
    <div className="teams-section">
      <div className="teams-container">
        <h2 className="teams-title">Our Teams</h2>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;