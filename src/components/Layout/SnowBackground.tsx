export const SnowBackground = () => {
  const snowflakes = Array.from({ length: 100 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-2 w-2 bg-white rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animation: `fall ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};