'use client';

import { motion } from 'motion/react';
import { IconType } from 'react-icons';
import { ShareButton } from './share-button';

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-lg p-6 shadow-2xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="relative shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-primary dark:text-primary" />
        </motion.div>
        <div className="min-w-0 flex-1 pr-12">
          <h3 className="font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors truncate">
            {title}
          </h3>
          <p className="text-sm text-black/70 dark:text-white/70 group-hover:text-black/70 dark:group-hover:text-white/80 transition-colors line-clamp-1">
            {description}
          </p>
        </div>
        <ShareButton url={href} />
      </div>
    </motion.a>
  );
}
