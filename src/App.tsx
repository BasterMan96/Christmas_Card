import { useState } from 'react';
import { SnowBackground } from './components/Layout/SnowBackground';
import { Header } from './components/Layout/Header';
import { Controls } from './components/CardEditor/Controls';
import { BackgroundPicker } from './components/CardEditor/BackgroundPicker';
import { CardCanvas } from './components/Preview/CardCanvas';
import { Button } from './components/UI/Button';
import { useCardExport } from './hooks/useCardExport';
import { CardData } from './types/card.types';

const defaultCardData: CardData = {
  title: 'С Новым Годом!',
  message: 'Пусть этот год принесёт вам радость, здоровье и исполнение самых заветных желаний!',
  signature: 'От ваших друзей',
  background: '/backgrounds/christmas-1.jpg',
  textColor: 'white',
  alignment: 'center',
};

function App() {
  const [cardData, setCardData] = useState<CardData>(defaultCardData);
  const { exportToImage, shareCard } = useCardExport();

  const updateCardData = (updates: Partial<CardData>) => {
    setCardData(prev => ({ ...prev, ...updates }));
  };

  const handleDownload = async () => {
    const success = await exportToImage();
    if (success) {
      // Показать toast об успехе
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-frost-blue/20 to-soft-red/10 relative">
      <SnowBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Левая колонка - настройки */}
          <div className="lg:w-2/5 space-y-8">
            <Controls 
              cardData={cardData} 
              onUpdate={updateCardData} 
            />
            
            <BackgroundPicker 
              selected={cardData.background}
              onSelect={(bg) => updateCardData({ background: bg })}
            />
            
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-4 pb-6 lg:pb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  variant="primary"
                  className="flex-1 py-4 text-lg"
                >
                  💝 Скачать открытку
                </Button>
                
                <Button
                  onClick={() => shareCard()}
                  variant="secondary"
                  className="flex-1 py-4 text-lg"
                >
                  📤 Поделиться
                </Button>
              </div>
              
              <p className="text-center text-gray-600 text-sm mt-4">
                Открытка сохранится в формате PNG (1080x1350px)
              </p>
            </div>
          </div>
          
          {/* Правая колонка - превью */}
          <div className="lg:w-3/5 flex items-center justify-center">
            <div className="sticky top-8">
              <CardCanvas 
                cardData={cardData} 
                className="mx-auto"
              />
              <p className="text-center text-gray-600 mt-4">
                Предпросмотр. Нажмите "Скачать" для сохранения
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 text-4xl animate-float">🎅</div>
      <div className="fixed top-4 left-4 text-4xl animate-float" style={{ animationDelay: '1s' }}>🦌</div>
    </div> 
  );
}

export default App;