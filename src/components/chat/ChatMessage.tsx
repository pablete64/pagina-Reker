import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  onLinkClick?: () => void;
  index?: number;
}

// Parse markdown-style links [text](/url) and render as React Router Links
function parseLinks(text: string, onLinkClick?: () => void) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    const [, linkText, url] = match;
    
    // Check if it's an internal link
    if (url.startsWith('/')) {
      parts.push(
        <Link
          key={match.index}
          to={url}
          onClick={onLinkClick}
          className="text-primary hover:underline font-medium inline-flex items-center gap-1 transition-colors"
        >
          {linkText}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            className="inline-block"
          >
            →
          </motion.span>
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          {linkText}
        </a>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

export function ChatMessage({ role, content, onLinkClick, index = 0 }: ChatMessageProps) {
  const isUser = role === 'user';
  
  return (
    <motion.div
      className={cn('flex gap-3', isUser && 'flex-row-reverse')}
      initial={{ 
        opacity: 0, 
        x: isUser ? 20 : -20, 
        y: 10, 
        scale: 0.95 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1 
      }}
      transition={{
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
        mass: 0.8,
      }}
      layout
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring' as const,
          stiffness: 500,
          damping: 20,
          delay: 0.1,
        }}
        className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
          isUser ? 'bg-primary' : 'bg-secondary'
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-foreground" />
        )}
      </motion.div>
      <motion.div
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-md'
            : 'bg-secondary text-foreground rounded-bl-md'
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
      >
        <p className="whitespace-pre-wrap leading-relaxed">
          {parseLinks(content, onLinkClick)}
        </p>
      </motion.div>
    </motion.div>
  );
}
