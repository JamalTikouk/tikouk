import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): void => {
  const client = getClient();
  if (!client) return;

  chatSession = client.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are Lux, a helpful and sophisticated AI assistant for LuxDrive, a premium car rental service. 
      Your tone is professional, concise, and helpful.
      You can help users pick a car based on their needs (Speed, Comfort, Family, Eco-friendly).
      
      The available fleet includes:
      - Tesla Model S Plaid (Electric, very fast, $189/day)
      - Porsche 911 Carrera (Sports, 2 seats, $299/day)
      - Range Rover Autobiography (SUV, luxury off-road, $249/day)
      - Mercedes-Benz S-Class (Luxury Sedan, ultimate comfort, $220/day)
      - Toyota RAV4 Hybrid (SUV, economical, $85/day)
      - BMW M4 Competition (Sports, aggressive, $195/day)
      
      Keep responses short (under 50 words) unless asked for details.
      `,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please check your API configuration.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you please repeat?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble processing your request right now. Please try again later.";
  }
};
