import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./src/components/Nav";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import {Provider} from "react-redux"
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import HelpPage from "./src/components/Help";
function App() {
    if (process.env.NODE_ENV === 'development') {
        import.meta.hot.accept();
    } 
    return(
        <Provider store={appStore}>
            <div>
                <Nav />
            
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/resturants/:resId",
                element: <ResturantMenu />
            },
            {
                path: "/help",
                element: <HelpPage />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);