import { CardData } from '../../types/card.types';

interface CardCanvasProps {
  cardData: CardData;
  className?: string;
}

export const CardCanvas = ({ cardData, className }: CardCanvasProps) => {
  return (
    <div 
      className={`
        relative w-full max-w-md aspect-[4/5] 
        rounded-3xl overflow-hidden 
        shadow-2xl shadow-santa-red/20
        ${className}
      `}
      id="card-to-export"
      style={{
        backgroundImage: `url(${cardData.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      {/* Контент открытки */}
      <div className="relative p-8 h-full flex flex-col justify-center">
        <h1 
          className={`text-4xl font-bold mb-6 text-center font-cursive
            ${cardData.textColor === 'gold' ? 'text-warm-gold' : 
              cardData.textColor === 'white' ? 'text-warm-white' : 
              'text-gray-800'}
            ${cardData.alignment === 'left' ? 'text-left' : 
              cardData.alignment === 'right' ? 'text-right' : 
              'text-center'}
            drop-shadow-lg`}
        >
          {cardData.title}
        </h1>
        
        <p className={`
          text-xl mb-8 leading-relaxed
          ${cardData.textColor === 'gold' ? 'text-soft-gold' : 
            cardData.textColor === 'white' ? 'text-warm-white/90' : 
            'text-gray-700'}
          ${cardData.alignment}
          font-sans
        `}>
          {cardData.message}
        </p>
        
        <div className={`mt-auto ${cardData.alignment}`}>
          <p className={`
            text-lg italic
            ${cardData.textColor === 'gold' ? 'text-warm-gold' : 
              cardData.textColor === 'white' ? 'text-warm-white' : 
              'text-gray-800'}
            font-handwriting
          `}>
            {cardData.signature}
          </p>
        </div>
        
        {/* Декоративные снежинки на открытке */}
        <div className="absolute top-4 right-4 text-white/30 text-2xl">❄️</div>
        <div className="absolute bottom-4 left-4 text-white/30 text-2xl">🎄</div>
      </div>
    </div>
  );
};