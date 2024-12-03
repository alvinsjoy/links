'use client';

import { RxMoon, RxSun } from 'react-icons/rx';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 w-10 h-10 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white/30 transition-all z-50"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <RxSun className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
      <RxMoon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
