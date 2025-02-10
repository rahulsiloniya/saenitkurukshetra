import { ReactNode } from "react";
import { Card } from "./CardComponents";
import './Options.css';

interface option {
    icon: ReactNode;
    title: ReactNode;
    description: ReactNode;
}

interface Props {
    children: option[];
}

const Options = ({children }: Props) => {
    return (
        <div className="stats-grid">
            {children.map((child, index) => (
                <Card key={index} className='stat-card'>
                    <div className='stat-icon'>
                        {child.icon}
                    </div>
                    <h3 className='stat-title'>{child.title}</h3>
                    <p className='stat-description'>{child.description}</p>
                </Card>
            ))}
        </div>
    )
}

export default Options;