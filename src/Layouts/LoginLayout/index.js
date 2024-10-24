import React from 'react';
import Footer from '~/components/Footer';

const LoginLayout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default LoginLayout;
