'use client';

import { Fragment, useEffect, useState, useCallback } from 'react';
import { FaLink, FaCode } from 'react-icons/fa6';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Links } from '@/components/links/links';
import { motion } from 'motion/react';

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <motion.button
          className="relative inline-flex items-center gap-2 mb-4 rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-2xl px-4 py-2"
          whileHover={{ scale: 1.02 }}
          onClick={() => setOpen(true)}
        >
          <p className="text-sm text-black/70 dark:text-white/70 hover:text-black/70 dark:hover:text-white/80 transition-colors">
            Open command palette...
          </p>
          <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </motion.button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="General">
            <CommandItem
              value="Copy Link"
              onSelect={() =>
                runCommand(() =>
                  navigator.clipboard.writeText(window.location.href),
                )
              }
            >
              <FaLink className="mr-2 h-4 w-4" />
              Copy Link
            </CommandItem>
            <CommandItem
              value="Source Code"
              onSelect={() =>
                runCommand(() =>
                  window.open('https://github.com/alvinsjoy/links', '_blank'),
                )
              }
            >
              <FaCode className="mr-2 h-4 w-4" />
              Source Code
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {Links.map((group, index) => (
            <Fragment key={group.title}>
              <CommandGroup heading={group.title}>
                {group.links.map((link) => (
                  <CommandItem
                    key={link.href}
                    value={link.title}
                    data-umami-event={link.title}
                    onSelect={() =>
                      runCommand(() => window.open(link.href, '_blank'))
                    }
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {index < Links.length - 1 && <CommandSeparator />}
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
