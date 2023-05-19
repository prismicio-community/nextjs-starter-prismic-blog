import { PropsWithChildren } from "react";

const SectionTitle: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="pb-12">
    <h1 className="border-r-[5px] border-solid border-r-primary pr-2 text-2xl font-bold tracking-[0.5pt] text-gray-700 text-align-right">
      {children}
    </h1>
  </div>
);

export default SectionTitle;
