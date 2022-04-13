import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, withProfile, children }) => {
  return (
    <div className="text-gray-700">
      <Header
        withProfile={withProfile}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
