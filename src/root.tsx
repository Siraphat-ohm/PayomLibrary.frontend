import { Route, Routes } from "react-router-dom";
import { App } from "./app";
import { AuthProvidder } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { AdminLogin, UserLogin } from "./pages/Login/Login";
import { Order } from "./pages/Order/Order";
import { Reciept } from "./pages/Receipt/Reciept";
import { RequestOrder } from "./pages/RequestOrder/Request";

export function Root() {
    return (
        <AuthProvidder>
            <CartProvider>
                <Routes>
                    <Route path='login' element={<UserLogin/>} />
                    <Route path='main' element={<App/>}>
                        <Route path='home' element={<Home/>}/>
                        <Route path='orders' element={<Order/>}/>
                        <Route path='cart' element={<Cart/>}/>
                    </Route>
                    <Route path='sudo-login' element={<AdminLogin/>} />
                    <Route path='sudo' element={<App admin/>}>
                        <Route path="request" element={<RequestOrder/>}/>
                        <Route path="receipt" element={<Reciept/>}/>
                        <Route path="register-book" element={<h1>this is register page.</h1>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </AuthProvidder>
    )
}