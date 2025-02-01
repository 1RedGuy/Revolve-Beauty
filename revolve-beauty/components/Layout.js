import Header from './Header';
import Footer from './sections/AboutSections/AboutFooter';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 