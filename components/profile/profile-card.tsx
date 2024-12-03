import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileCard() {
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl mb-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Avatar className="w-24 h-24 border-2 border-white/50">
          <AvatarImage src="https://github.com/alvinsjoy.png" alt="Profile" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-center text-black dark:text-white">
          Alvin Joy
        </h1>
        <p className="text-black/70 dark:text-white/70 text-center max-w-lg">
          Full-stack developer passionate about creating beautiful and
          functional web applications. Currently exploring new tech and staying
          connected with the developer community.
        </p>
      </div>
    </div>
  );
}
