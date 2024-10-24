import React from 'react';
import Footer from '~/components/Footer';

const RegisterLayout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default RegisterLayout;
