import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-orange-300 z-50 py-6 px-10">
        <Header />
      </header>

      <main className="flex-1 py-[120px] bg-red-100 px-10">
        {children}
      </main>
      <footer className="w-full  bg-green-300 py-3 px-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;