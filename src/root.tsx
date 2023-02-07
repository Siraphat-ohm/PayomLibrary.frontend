import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AuthProvidder } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { AdminLogin, UserLogin } from "./pages/Login/Login";
import { Order } from "./pages/Order/Order";

export function Root() {
    return (
        <AuthProvidder>
            <CartProvider>
                <Routes>
                    <Route path='/login' element={<UserLogin/>} />
                    <Route path='/main' element={<App/>}>
                        <Route path='home' element={<Home/>}/>
                        <Route path='orders' element={<Order/>}/>
                        <Route path='cart' element={<Cart/>}/>
                    </Route>
                    <Route path='/sudo-login' element={<AdminLogin/>} />
                </Routes>
            </CartProvider>
        </AuthProvidder>
    )
}