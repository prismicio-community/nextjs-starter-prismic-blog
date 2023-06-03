import { PropsWithChildren } from "react";
import cn from "@/src/lib/utils/cn";
import { WithClassName } from "@/types";

const SectionTitle: React.FC<WithClassName<PropsWithChildren>> = ({
  children,
  className,
}) => (
  <div className="pb-12">
    <h1
      className={cn(
        "border-r-[5px] border-solid border-r-primary pr-2 text-2xl font-bold tracking-[0.5pt] text-gray-700 align-right",
        className
      )}
    >
      {children}
    </h1>
  </div>
);

export default SectionTitle;
