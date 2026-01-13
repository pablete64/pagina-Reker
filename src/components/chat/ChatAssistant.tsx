import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Bot, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { useWebsiteAssistant } from '@/hooks/useWebsiteAssistant';
import { cn } from '@/lib/utils';

interface ChatAssistantProps {
  onClose?: () => void;
}

const suggestedQuestions = [
  '¿Qué servicios ofrecéis?',
  '¿Trabajáis con robots?',
  '¿Hacéis mantenimiento?',
];

export function ChatAssistant({ onClose }: ChatAssistantProps) {
  const { messages, isLoading, error, sendMessage, clearMessages } = useWebsiteAssistant();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    if (!isLoading) {
      sendMessage(question);
    }
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="flex flex-col h-[450px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
        className="flex items-center justify-between pb-4 border-b border-border"
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
          >
            <Bot className="w-4 h-4 text-primary-foreground" />
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut' as const,
              }}
            />
          </motion.div>
          <div>
            <h3 className="font-semibold text-sm flex items-center gap-1.5">
              Asistente REKER
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </motion.span>
            </h3>
            <p className="text-xs text-muted-foreground">Te ayudo a navegar por la web</p>
          </div>
        </div>
        <AnimatePresence>
          {messages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={clearMessages}
                className="text-muted-foreground hover:text-foreground"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Messages area */}
      <ScrollArea className="flex-1 py-4" ref={scrollRef}>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.length === 0 ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
                  >
                    <Bot className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                  </motion.div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 25, delay: 0.1 }}
                  className="text-sm text-muted-foreground mb-4"
                >
                  ¡Hola! Soy el asistente virtual de REKER TECH SOLUTIONS. 
                  Pregúntame sobre nuestros servicios, proyectos o cualquier información de la web.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 25, delay: 0.2 }}
                  className="flex flex-wrap gap-2 justify-center"
                >
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={question}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.4 + index * 0.1 },
                      }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  role={msg.role}
                  content={msg.content}
                  onLinkClick={handleLinkClick}
                  index={index}
                />
              ))
            )}
          </AnimatePresence>
          
          {/* Typing indicator */}
          <AnimatePresence>
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <motion.div
                key="typing-indicator"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                className="flex gap-3"
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring' as const, stiffness: 500, damping: 20 }}
                >
                  <Bot className="w-4 h-4 text-foreground" />
                </motion.div>
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 bg-muted-foreground/60 rounded-full"
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: 'easeInOut' as const,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-2"
              >
                <p className="text-sm text-destructive">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Input area */}
      <motion.form
        onSubmit={handleSubmit}
        className="pt-4 border-t border-border"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring' as const, stiffness: 400, damping: 25 }}
      >
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            disabled={isLoading}
            className="flex-1 transition-shadow focus:shadow-md"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className={cn(
                'transition-all',
                input.trim() && !isLoading ? 'bg-primary shadow-md' : 'bg-muted'
              )}
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </motion.form>
    </div>
  );
}
