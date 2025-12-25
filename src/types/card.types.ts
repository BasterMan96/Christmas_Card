export type TextColor = 'white' | 'black' | 'gold';
export type Alignment = 'left' | 'center' | 'right';

export interface CardData {
  title: string;
  message: string;
  signature: string;
  background: string;
  textColor: TextColor;
  alignment: Alignment;
}