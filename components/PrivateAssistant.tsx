
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/gemini';
import { ChatMessage } from '../types';

interface PrivateAssistantProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const PrivateAssistant: React.FC<PrivateAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Buenos días. Soy su asistente privado. ¿En qué puedo asistirle en relación a nuestra exclusiva colección hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAssistantResponse(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 z-[100] w-full sm:w-[400px] h-[600px] sm:h-[500px] bg-background-black border-t sm:border-l border-[#333] shadow-2xl flex flex-col sm:rounded-tl-2xl overflow-hidden transition-all duration-500 ease-in-out">
      {/* Header */}
      <div className="p-4 border-b border-[#333] flex items-center justify-between bg-[#111]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark text-sm">smart_toy</span>
          </div>
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest">Asistente Privado</h3>
            <span className="text-[10px] text-primary uppercase font-sans font-bold">En línea</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-[#555] hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-lg text-sm font-display leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary/10 border border-primary/20 text-white' 
                : 'bg-[#1a1a1a] border border-[#222] text-[#a3a3a3]'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#1a1a1a] border border-[#222] p-4 rounded-lg flex gap-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[#333] bg-[#0a0a0a]">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escriba su consulta..."
            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-[#555] font-light italic"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={`p-2 rounded-full transition-all ${input.trim() ? 'text-primary scale-110' : 'text-[#333]'}`}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateAssistant;
