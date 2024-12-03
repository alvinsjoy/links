import { LinkList } from '@/components/links/link-list';
import { ProfileCard } from '@/components/profile/profile-card';
import { ThemeSwitch } from '@/components/theme-switch';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function Home() {
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

      <main className="relative flex min-h-screen flex-col items-center justify-center p-8">
        <ThemeSwitch />
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <ProfileCard />
          <LinkList />
        </div>
      </main>
    </div>
  );
}
