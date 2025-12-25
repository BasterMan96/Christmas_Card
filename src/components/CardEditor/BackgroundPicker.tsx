import { CardData } from '../../types/card.types';

const backgrounds = [
  { id: 1, url: '/backgrounds/christmas-1.jpg', name: 'Ёлка с огоньками' },
  { id: 2, url: '/backgrounds/christmas-2.jpg', name: 'Снежный лес' },
  { id: 3, url: '/backgrounds/christmas-3.jpg', name: 'Камин' },
  { id: 4, url: '/backgrounds/christmas-4.jpg', name: 'Город зимой' },
  { id: 5, url: '/backgrounds/christmas-5.jpg', name: 'Новогодний стол' },
  { id: 6, url: '/backgrounds/christmas-6.jpg', name: 'Северное сияние' },
];

interface BackgroundPickerProps {
  selected: string;
  onSelect: (url: string) => void;
}

export const BackgroundPicker = ({ selected, onSelect }: BackgroundPickerProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🎨 Выберите фон</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            onClick={() => onSelect(bg.url)}
            className={`relative rounded-xl overflow-hidden aspect-square transition-all ${
              selected === bg.url 
                ? 'ring-4 ring-santa-red scale-105' 
                : 'hover:scale-102 hover:ring-2 hover:ring-santa-red/50'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bg.url})` }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2">
              {bg.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};