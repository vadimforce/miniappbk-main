

// Lives.tsx
interface LivesProps {
    lives: number;
}

const Lives = ({ lives }: LivesProps) => {
    return <div>Lives: {lives}</div>;
};

export default Lives;