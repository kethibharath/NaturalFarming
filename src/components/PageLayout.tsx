import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;
