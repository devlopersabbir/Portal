import { LoadingSpinner } from '@/components/atom/loader/spinner';

export function PageLoader() {
  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center">
      <LoadingSpinner className="border-purple h-10 w-10 border-[2px] border-b-0 border-r-0" />
    </div>
  );
}
