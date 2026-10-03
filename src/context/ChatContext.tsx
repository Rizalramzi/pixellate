import React, { createContext, useContext, useState } from 'react';

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  initialPrompt: string | null;
  askQuestion: (question: string) => void;
  clearInitialPrompt: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState<string | null>(null);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  const askQuestion = (question: string) => {
    setInitialPrompt(question);
    setIsOpen(true);
  };

  const clearInitialPrompt = () => setInitialPrompt(null);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openChat,
        closeChat,
        initialPrompt,
        askQuestion,
        clearInitialPrompt,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
