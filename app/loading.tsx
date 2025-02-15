import { LoadingIcon } from '@/components/loading-icon';

export default function Loading() {
  return (
    <div className="min-h-screen w-full">
      <div className="fixed inset-0 bg-linear-to-br from-purple-900 to-blue-900 opacity-50" />

      <main className="relative flex min-h-screen flex-col items-center justify-center p-8">
        <LoadingIcon />
      </main>
    </div>
  );
}
