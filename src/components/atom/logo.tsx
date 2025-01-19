import { Link } from '@/config/navigation';
import { ROUTES } from '@/config/routes';

import { LogoColor, LogoIcon } from '@/components/atom/icons/logo';

export function Logo({
  color,
  className,
}: {
  color?: LogoColor;
  className?: string;
}) {
  return (
    <Link href={ROUTES.INDEX}>
      <LogoIcon color={color} className={className} />
    </Link>
  );
}
