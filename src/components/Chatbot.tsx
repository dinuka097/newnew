import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const INITIAL_MESSAGE = "👋 Hi! I'm TechBot, your AI assistant. How can I help you today?";

const chatbotKnowledge = {
  about: `TechScrolll is a leading digital innovation company specializing in:
- Full-stack development
- Mobile app development
- Cloud solutions
- Database architecture
- Cybersecurity
- Digital transformation`,
  
  services: `Our main services include:
1. Web Development
   - Custom web applications
   - E-commerce solutions
   - Progressive Web Apps
2. Mobile Development
   - iOS and Android apps
   - Cross-platform solutions
3. Cloud Solutions
   - AWS, Azure, GCP expertise
   - Cloud architecture
4. Database Solutions
   - Architecture design
   - Performance optimization
5. Cybersecurity
   - Security audits
   - Penetration testing`,
  
  contact: `You can reach us at:
- Email: hello@techscrolll.com
- Phone: +61 422 666 104
- Address: 43 Brittlegum Street, Cranbourne East, VIC, Australia`,
  
  expertise: `Our areas of expertise:
- React & Node.js
- Python & TypeScript
- AWS & Cloud Computing
- Machine Learning & AI
- UI/UX Design
- DevOps & CI/CD`
};

const processUserMessage = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
    return chatbotKnowledge.about;
  }
  if (lowerMessage.includes('service')) {
    return chatbotKnowledge.services;
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    return chatbotKnowledge.contact;
  }
  if (lowerMessage.includes('expert') || lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return chatbotKnowledge.expertise;
  }
  
  return `I can help you with information about:
- Our company and mission
- Our services
- Contact information
- Our expertise and technologies

What would you like to know more about?`;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: INITIAL_MESSAGE }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user' as const, content: inputMessage };
    const botResponse = { type: 'bot' as const, content: processUserMessage(inputMessage) };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 z-40 p-4 rounded-full bg-primary dark:bg-secondary text-white shadow-lg ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, y: 100 }}
            className={`fixed bottom-4 right-4 z-40 w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden ${
              isMinimized ? 'h-auto' : 'h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="bg-primary dark:bg-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} className="text-white" />
                <h3 className="text-white font-semibold">TechBot</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  {isMinimized ? (
                    <Maximize2 size={18} className="text-white" />
                  ) : (
                    <Minimize2 size={18} className="text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div
                        className={`inline-block max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary dark:bg-secondary text-white'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                      >
                        <ReactMarkdown
                          className={`text-sm ${
                            message.type === 'user'
                              ? 'text-white'
                              : 'text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-2 rounded-lg bg-primary dark:bg-secondary text-white hover:opacity-90 transition-opacity"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;