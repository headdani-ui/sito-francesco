
export interface Property {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  CREAM = 'cream'
}
