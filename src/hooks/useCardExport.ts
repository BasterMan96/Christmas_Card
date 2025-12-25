import { useCallback } from 'react';
import html2canvas from 'html2canvas';

export const useCardExport = () => {
  const exportToImage = useCallback(async (elementId: string = 'card-to-export') => {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Card element not found');
    }

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2, // Для лучшего качества
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement('a');
      link.download = `new-year-card-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();

      return true;
    } catch (error) {
      console.error('Error exporting card:', error);
      return false;
    }
  }, []);

  const shareCard = useCallback(async (elementId: string = 'card-to-export') => {
    if (navigator.share) {
      try {
        const element = document.getElementById(elementId);
        if (!element) return;

        const canvas = await html2canvas(element, { scale: 2 });
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b!), 'image/png');
        });

        const file = new File([blob], 'new-year-card.png', { type: 'image/png' });

        await navigator.share({
          files: [file],
          title: 'Новогодняя открытка',
          text: 'Посмотрите мою новогоднюю открытку!',
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  }, []);

  return { exportToImage, shareCard };
};