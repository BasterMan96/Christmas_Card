import { useState } from 'react';
import { CardData, TextColor, Alignment } from '../../types/card.types';

interface ControlsProps {
  cardData: CardData;
  onUpdate: (data: Partial<CardData>) => void;
}

export const Controls = ({ cardData, onUpdate }: ControlsProps) => {
  const [activeTab, setActiveTab] = useState<'text' | 'style'>('text');

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
      <div className="flex gap-2 mb-4 md:mb-6">
        <button
          onClick={() => setActiveTab('text')}
          className={`px-3 py-2 rounded-full transition-all text-sm md:text-base ${
            activeTab === 'text' 
              ? 'bg-santa-red text-white' 
              : 'bg-white/50 text-gray-700 hover:bg-white/70'
          }`}
        >
          ✏️ Текст
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`px-3 py-2 rounded-full transition-all text-sm md:text-base ${
            activeTab === 'style' 
              ? 'bg-santa-red text-white' 
              : 'bg-white/50 text-gray-700 hover:bg-white/70'
          }`}
        >
          🎨 Стиль
        </button>
      </div>

      {activeTab === 'text' ? (
        <div className="space-y-3 md:space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Заголовок
            </label>
            <input
              type="text"
              value={cardData.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent text-sm md:text-base"
              placeholder="С Новым Годом!"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Поздравление
            </label>
            <textarea
              value={cardData.message}
              onChange={(e) => onUpdate({ message: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent text-sm md:text-base resize-none"
              placeholder="Пусть этот год принесет радость и счастье..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
              Подпись
            </label>
            <input
              type="text"
              value={cardData.signature}
              onChange={(e) => onUpdate({ signature: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent text-sm md:text-base"
              placeholder="От [Ваше имя]"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
              Цвет текста
            </label>
            <div className="flex gap-2 md:gap-3">
              {(['white', 'black', 'gold'] as TextColor[]).map((color) => (
                <button
                  key={color}
                  onClick={() => onUpdate({ textColor: color })}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-transform ${
                    cardData.textColor === color 
                      ? 'border-santa-red scale-110' 
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: 
                      color === 'gold' ? '#ffd166' :
                      color === 'white' ? '#fff9f0' :
                      '#1a202c'
                  }}
                  title={color === 'gold' ? 'Золотой' : color === 'white' ? 'Белый' : 'Черный'}
                />
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 md:mb-3">
              Выравнивание
            </label>
            <div className="flex gap-2 md:gap-3">
              {(['left', 'center', 'right'] as Alignment[]).map((align) => (
                <button
                  key={align}
                  onClick={() => onUpdate({ alignment: align })}
                  className={`flex-1 p-2 md:p-3 rounded-lg md:rounded-xl transition-all text-xs md:text-sm ${
                    cardData.alignment === align 
                      ? 'bg-soft-green text-white shadow-md' 
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  {align === 'left' ? '← Слева' : 
                   align === 'center' ? '↔ По центру' : '→ Справа'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};