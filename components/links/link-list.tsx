'use client';

import { motion } from 'framer-motion';
import { LinkGroup } from './link-group';
import { Links } from './links';

export function LinkList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {Links.map((group) => (
        <LinkGroup key={group.title} {...group} />
      ))}
    </motion.div>
  );
}
