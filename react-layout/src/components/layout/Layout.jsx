import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-orange-300 z-50 lg:py-6 md:py-4 py-2 sm:py-2 lg:px-10 md:px-8 sm:px-5 px-3 lg:text-lg sm:text-sm text-xs">
        <Header />
      </header>
      <main className="flex-1 lg:py-[90px] md:py-[70px] py-[50px] bg-red-100 lg:px-10 md:px-8 sm:px-5 px-3 lg:text-lg sm:text-sm text-xs">
        {children}
      </main>
      <footer className="w-full  bg-green-300 lg:py-3 py-2 lg:px-10 md:px-8 sm:px-5 px-3 lg:text-lg sm:text-sm text-xs">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;