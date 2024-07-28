import { useEffect, useState } from 'react';

const colors = ['',];

interface Star {
  id: number;
  color: string;
  position: {
    top: string;
    left: string;
  };
}

const generateRandomPosition = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`,
});

const generateStars = (numStars: number): Star[] => {
  return Array.from({ length: numStars }, (_, index) => ({
    id: index,
    color: colors[Math.floor(Math.random() * colors.length)],
    position: generateRandomPosition(),
  }));
};

const LoadingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(3)); // Generate 300 stars
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      <div className="relative w-full h-full">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: star.color,
              top: star.position.top,
              left: star.position.left,
              transform: 'translate(-50%, -50%)',
              animation: `twinkle 1.5s infinite, move ${Math.random() * 3 + 2}s linear infinite`
            }}
          />
        ))}
      </div>
      
    </div>
  );
};

export default LoadingStars;
