function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div tw="animate-pulse rounded-md" className={className} {...props} />;
}

export { Skeleton };
