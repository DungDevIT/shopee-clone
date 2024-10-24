import { Routes, Route } from 'react-router-dom';
import { LoginLayout, MainLayout, RegisterLayout } from '~/Layouts';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Product from '~/pages/Product';
import Register from '~/pages/Register';

const Routing = () => {
    return (
        <Routes>
            {/* Các trang có header và footer */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
            <Route
                path="/product/:id"
                element={
                    <MainLayout>
                        <Product />
                    </MainLayout>
                }
            />
            <Route
                path="/cart"
                element={
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                }
            />

            {/* Trang đăng nhập có Footer */}
            <Route
                path="/login"
                element={
                    <LoginLayout>
                        <Login />
                    </LoginLayout>
                }
            />
            <Route
                path="/signup"
                element={
                    <RegisterLayout>
                        <Register />
                    </RegisterLayout>
                }
            />
        </Routes>
    );
};

export default Routing;
