import './TeamCard.css';

interface TeamCardProps {
  name: string;
  description: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, description, image }) => {
  return (
    <div className="team-card group">
      <img 
        src={image} 
        alt={name} 
        className="team-image"
      />
      <div className="team-overlay" />
      <div className="team-content">
        <h3 className="team-name">{name}</h3>
        <p className="team-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
