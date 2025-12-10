import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface AIAssistantProps {
  pageContext?: string;
  welcomeMessage?: string;
  suggestions?: string[];
  title?: string;
}

interface Message {
  text: string;
  isUser: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({
  pageContext = "This is a general page on the CodeAlpha website.",
  welcomeMessage = "Hello! I'm your AI guide. How can I help you learn about this page?",
  suggestions = ["What is this page about?", "Summarize the content."],
  title = "AI Assistant"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const getApiKey = () => {
    try {
      return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
    } catch (e) {
      return undefined;
    }
  };

  const hasApiKey = !!getApiKey();

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: welcomeMessage, isUser: false }]);
    }
  }, [isOpen, welcomeMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = { text: textToSend, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!hasApiKey) {
        // Simulate a response if no API key is present
        await new Promise(resolve => setTimeout(resolve, 1500));
        setMessages(prev => [...prev, { text: "This is a simulated response as the API key is not configured. I would normally answer your question about: " + textToSend, isUser: false }]);
        return;
      }

      // FIX: Use new GoogleGenAI({apiKey: ...})
      const ai = new GoogleGenAI({ apiKey: getApiKey()! });
      const prompt = `
        You are a friendly and helpful assistant on the CodeAlpha website.
        Your goal is to help students understand the content of the page they are on.
        Be concise and encouraging. Your responses should be in plain text, not markdown.

        Page Context: ${pageContext}
        
        User's Question: "${textToSend}"
        
        Your Answer:
      `;

      // FIX: Use ai.models.generateContent
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      // FIX: Use response.text to extract text
      const aiText = response.text || "Sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { text: aiText, isUser: false }]);

    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again later.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-36 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-brand-500/50 active:scale-95 group print:hidden ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <Sparkles className="group-hover:animate-spin" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-[60] w-[calc(100vw-4rem)] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom-8 fade-in duration-500 print:hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 text-white flex items-center justify-center">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.isUser ? 'justify-end' : ''}`}>
                  {!msg.isUser && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                      <Bot size={18} className="text-slate-600 dark:text-slate-300" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.isUser ? 'bg-brand-600 text-white rounded-br-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                  <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                          <Bot size={18} className="text-slate-600 dark:text-slate-300" />
                      </div>
                      <div className="max-w-[80%] p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                         <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.2s]"></div>
                         <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s]"></div>
                      </div>
                  </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions & Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700 shrink-0">
            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mb-3">
                {suggestions.map((s, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSuggestionClick(s)}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full hover:bg-brand-50 dark:hover:bg-brand-900/50 hover:text-brand-700 dark:hover:text-brand-300 transition-all"
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* Input */}
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="w-full pl-4 pr-12 py-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm text-slate-900 dark:text-slate-100"
              />
              <button 
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 bottom-2 w-9 h-9 flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-all disabled:bg-slate-300 dark:disabled:bg-slate-600"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// FIX: Added default export to align with how the component is imported across the app.
export default AIAssistant;