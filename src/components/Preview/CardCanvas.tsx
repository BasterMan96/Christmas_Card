import { CardData } from '../../types/card.types';

interface CardCanvasProps {
  cardData: CardData;
  className?: string;
}

export const CardCanvas = ({ cardData, className }: CardCanvasProps) => {
  return (
    <div 
      className={`
        relative 
        w-[280px] h-[280px] /* Фиксированный размер для мобильных */
        sm:w-[320px] sm:h-[320px] /* Больше для планшетов */
        md:w-[400px] md:h-[400px] /* Для маленьких десктопов */
        lg:w-[450px] lg:h-[450px] /* Для десктопов */
        max-w-[95vw] /* Максимум 95% ширины экрана */
        max-h-[95vw]
        rounded-2xl md:rounded-3xl overflow-hidden 
        shadow-xl md:shadow-2xl shadow-santa-red/20
        mx-auto
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
      <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
        <h1 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center font-cursive
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
          text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed mb-4 sm:mb-6 md:mb-8
          ${cardData.textColor === 'gold' ? 'text-soft-gold' : 
            cardData.textColor === 'white' ? 'text-warm-white/90' : 
            'text-gray-700'}
          ${cardData.alignment}
          font-sans
          line-clamp-3 sm:line-clamp-4 md:line-clamp-none
        `}>
          {cardData.message}
        </p>
        
        <div className={`mt-auto ${cardData.alignment}`}>
          <p className={`
            text-sm sm:text-base md:text-lg italic
            ${cardData.textColor === 'gold' ? 'text-warm-gold' : 
              cardData.textColor === 'white' ? 'text-warm-white' : 
              'text-gray-800'}
            font-handwriting
          `}>
            {cardData.signature}
          </p>
        </div>
        
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/30 text-lg sm:text-xl md:text-2xl">❄️</div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white/30 text-lg sm:text-xl md:text-2xl">🎄</div>
      </div>
    </div>
  );
};