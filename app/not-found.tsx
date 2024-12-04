'use client';

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/button';
import { ThemeSwitch } from '@/components/theme-switch';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(108, 0, 162)"
        gradientBackgroundEnd="rgb(0, 17, 82)"
        firstColor="255, 0, 255"
        secondColor="255, 0, 128"
        thirdColor="0, 255, 255"
        fourthColor="128, 0, 255"
        fifthColor="200, 0, 255"
        pointerColor="140, 100, 255"
        size="80%"
        blendingValue="hard-light"
        containerClassName="fixed inset-0 z-0"
      />

      <ThemeSwitch />

      <main className="relative flex min-h-screen flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center space-y-8"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
            className="text-6xl md:text-8xl font-bold text-primary"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary/80"
          >
            Oops! Page not found
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              asChild
              variant="ghost"
              className="bg-white/30 dark:bg-black/30 backdrop-blur-lg hover:bg-white/40 dark:hover:bg-black/40 text-primary"
            >
              <Link href="/">
                <FaHome />
                Go Home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
