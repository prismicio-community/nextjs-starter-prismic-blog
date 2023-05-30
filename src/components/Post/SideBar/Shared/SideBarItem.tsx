const SideBarItemWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="mb-12">{children}</div>;
};

export default SideBarItemWrapper;
