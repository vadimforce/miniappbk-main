import { GameObject } from '@/types/GameObject';
import { useEffect, useState } from 'react';

interface ObjectProps {
    object: GameObject;
    onClick: (object: GameObject) => void;
}

const Object = ({ object, onClick }: ObjectProps) => {
    const [position, setPosition] = useState({ x: object.x, y: object.y });

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => ({
                x: prev.x + (Math.random() - 0.5) * 10,
                y: prev.y + object.speed,
            }));
        }, 16);

        return () => clearInterval(interval);
    }, [object.speed]);

    return (
        <div
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: 50,
                height: 50,
                backgroundColor: object.type === 'edible' ? 'green' : 'red',
            }}
            onClick={() => onClick(object)}
        />
    );
};

export default Object;