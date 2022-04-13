import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  navigation,
  settings,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};
