import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const PREDEFINED_QA: Record<string, string> = {
  "what services do you offer?": "I offer Website Development, Full Stack Web Applications, AI Chatbot Integration, AI Presentations for Business, and Custom Automation Solutions.",
  "how can i contact you?": "You can reach out via the contact form on this page, or connect with me on LinkedIn and GitHub!",
  "show your projects": "Scroll up to the Projects section to see my recent work, including a full-stack dashboard and AI integrations.",
  "hello": "Hi there! I'm your virtual assistant. How can I help you today?",
  "hi": "Hello! Welcome to the portfolio. What would you like to know?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi! I'm an AI assistant. Feel free to ask me about services, projects, or how to contact.", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = { id: Date.now().toString(), text: userText, isBot: false };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // API Integration Placeholder
      // To use a real API, replace 'YOUR_OPENAI_API_KEY' with your actual key
      // and ensure you're calling this from a secure backend to protect your key.
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userText }],
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;
      setMessages(prev => [...prev, { id: Date.now().toString(), text: botReply, isBot: true }]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      
      // Fallback to local logic if API fails or key is missing
      setTimeout(() => {
        const lowerInput = userText.toLowerCase();
        let botReply = "I'm having trouble connecting to my brain right now. Try asking about my services, projects, or contact info!";
        
        for (const [key, value] of Object.entries(PREDEFINED_QA)) {
          if (lowerInput.includes(key.replace('?', ''))) {
            botReply = value;
            break;
          }
        }

        setMessages(prev => [...prev, { id: Date.now().toString(), text: botReply, isBot: true }]);
      }, 600);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[350px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '420px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading">Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted/80 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                data-testid="button-close-chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.isBot 
                        ? 'bg-muted/80 text-foreground rounded-tl-sm border border-border/50' 
                        : 'bg-primary text-primary-foreground rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/80 text-foreground p-3.5 rounded-2xl rounded-tl-sm border border-border/50">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3.5 border-t border-border bg-background/95 backdrop-blur">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-muted/50 border border-border/80 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                  data-testid="input-chat-message"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all shadow-md shrink-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-send-chat"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all hover:scale-105 active:scale-95 group relative"
        data-testid="button-toggle-chat"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40"></span>
        {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
      </button>
    </div>
  );
}