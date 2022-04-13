import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  xSize = "base",
  className,
  children,
}) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          xSize === "base" && "max-w-3xl",
          xSize === "wide" && "max-w-4xl",
          xSize === "widest" && "max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
};
