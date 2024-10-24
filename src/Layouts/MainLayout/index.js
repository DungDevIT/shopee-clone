import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
