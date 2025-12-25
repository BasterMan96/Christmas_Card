import { useState } from 'react';
import { CardData } from '../../types/card.types';

interface ControlsProps {
  cardData: CardData;
  onUpdate: (data: Partial<CardData>) => void;
}

export const Controls = ({ cardData, onUpdate }: ControlsProps) => {
  const [activeTab, setActiveTab] = useState<'text' | 'style'>('text');

  return (
    <div className="bg-warm-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
      {/* Вкладки */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('text')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeTab === 'text' 
              ? 'bg-santa-red text-white' 
              : 'bg-white/50 text-gray-700'
          }`}
        >
          Текст
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeTab === 'style' 
              ? 'bg-santa-red text-white' 
              : 'bg-white/50 text-gray-700'
          }`}
        >
          Стиль
        </button>
      </div>

      {/* Контент вкладок */}
      {activeTab === 'text' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Заголовок
            </label>
            <input
              type="text"
              value={cardData.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent"
              placeholder="С Новым Годом!"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Поздравление
            </label>
            <textarea
              value={cardData.message}
              onChange={(e) => onUpdate({ message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent"
              placeholder="Пусть этот год принесет..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Подпись
            </label>
            <input
              type="text"
              value={cardData.signature}
              onChange={(e) => onUpdate({ signature: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-santa-red focus:border-transparent"
              placeholder="От [Ваше имя]"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Выбор цвета текста */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Цвет текста
            </label>
            <div className="flex gap-3">
              {['white', 'black', 'gold'].map((color) => (
                <button
                  key={color}
                  onClick={() => onUpdate({ textColor: color as any })}
                  className={`w-10 h-10 rounded-full border-2 ${
                    cardData.textColor === color 
                      ? 'border-santa-red' 
                      : 'border-transparent'
                  }`}
                  style={{
                    backgroundColor: 
                      color === 'gold' ? '#ffd166' :
                      color === 'white' ? '#fff9f0' :
                      '#1a202c'
                  }}
                  aria-label={`Выбрать ${color} цвет`}
                />
              ))}
            </div>
          </div>
          
          {/* Выравнивание */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Выравнивание
            </label>
            <div className="flex gap-3">
              {['left', 'center', 'right'].map((align) => (
                <button
                  key={align}
                  onClick={() => onUpdate({ alignment: align as any })}
                  className={`p-3 rounded-xl ${
                    cardData.alignment === align 
                      ? 'bg-soft-green text-white' 
                      : 'bg-white/50 text-gray-700'
                  }`}
                >
                  {align === 'left' ? '←' : 
                   align === 'center' ? '↔' : '→'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};