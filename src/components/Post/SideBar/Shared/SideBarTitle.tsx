interface SideBarTitleProps {
  title: string;
}

const SideBarTitle = ({ title }: SideBarTitleProps) => (
  <h3 className="mb-5 border-r-[5px] border-r-primary pr-3 font-bold tracking-[0.5pt] text-gray-800 text-align-right">
    {title}
  </h3>
);

export default SideBarTitle;
