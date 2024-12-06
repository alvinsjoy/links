'use client';

import { motion } from 'motion/react';
import { IconType } from 'react-icons';
import { LinkCard } from './link-card';

interface LinkGroupProps {
  title: string;
  links: Array<{
    title: string;
    description: string;
    href: string;
    icon: IconType;
  }>;
}

export function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-lg font-semibold text-white/70 px-1">{title}</h2>
      <div className="space-y-4">
        {links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
    </motion.div>
  );
}
