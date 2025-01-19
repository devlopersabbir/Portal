import { cn } from '@/lib/utils/cn';

export function SectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'mb-2 font-bold uppercase tracking-[3px] text-primary',
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'mx-auto mb-4 max-w-[20ch] text-[28px] font-black text-black md:text-[40px] md:leading-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn('mx-auto max-w-[62ch] leading-6 text-gray-500', className)}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

<div className="mb-14 text-center">
  <p className="font-bold uppercase tracking-[3px] text-primary">FAQS</p>
  <h2 className="font-inter mx-auto my-2 max-w-[25ch] text-[28px] font-bold text-black md:text-[40px] md:leading-tight">
    Frequently Asked Questions
  </h2>
  <p className="mx-auto max-w-[62ch] leading-6 text-gray-500">
    Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam
    ultrices tellus consequat amet, lectus aliquam est in neque.
  </p>
</div>;

export function SectionHeading({
  subtitle,
  title,
  description,
  className,
  subtitleClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-6 text-center', className)}>
      {subtitle && (
        <SectionSubtitle className={cn(subtitleClassName)}>
          {subtitle}
        </SectionSubtitle>
      )}
      <SectionTitle className={cn(titleClassName)}>{title}</SectionTitle>
      {description && (
        <SectionDescription className={cn(descriptionClassName)}>
          {description}
        </SectionDescription>
      )}
    </div>
  );
}
