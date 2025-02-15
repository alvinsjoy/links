'use client';

import { Button } from '@/components/ui/button';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareButtonProps {
  url: string;
}

export function ShareButton({ url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 dark:bg-black/10 backdrop-blur-xs rounded-full hover:scale-110 transition-all"
      onClick={(e) => {
        e.preventDefault();
        handleShare();
      }}
      title={copied ? 'Copied!' : 'Copy link'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={copied ? 'check' : 'copy'}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.1 }}
          className="relative"
        >
          {copied ? (
            <FaClipboardCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <FaClipboard className="w-4 h-4 text-black/70 dark:text-white/70" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">{copied ? 'Copied!' : 'Copy link'}</span>
    </Button>
  );
}
