
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAssistantResponse = async (history: { role: 'user' | 'model', text: string }[], currentMessage: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Eres el asistente privado de un consultor de propiedades de ultra-lujo y hospitalidad de élite con 25 años de experiencia. 
        Tu tono debe ser sofisticado, reservado, profesional y extremadamente educado. 
        Menciona que la consultoría es exclusiva bajo invitación. 
        Si preguntan por el consultor, destaca su valor de cartera de €2.4B+ y su filosofía de "El verdadero lujo susurra, no grita".
        Hablas en español de forma elegante.`,
      },
    });

    // We don't use 'contents' in chat.sendMessage, just the message string
    const response = await chat.sendMessage({ message: currentMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, ha ocurrido un error en mi red privada. Por favor, intente de nuevo más tarde.";
  }
};
