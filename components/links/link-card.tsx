'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { ShareButton } from './share-button';

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  className?: string;
}

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative block w-full rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-lg p-6 shadow-2xl transition-all hover:-translate-y-1 hover:shadow-3xl',
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 pr-12">
        <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <Icon className="w-7 h-7 text-primary dark:text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-black/70 dark:text-white/70 group-hover:text-black/70 dark:group-hover:text-white/80 transition-colors">
            {description}
          </p>
        </div>
      </div>
      <ShareButton url={href} />
    </motion.a>
  );
}
