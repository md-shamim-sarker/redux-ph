import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Counter from "../pages/Counter";
import Home from "../pages/Home";
import LongForm from "../pages/LongForm";
import ShortForm from "../pages/ShortForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/counter",
                element: <Counter></Counter>
            },
            {
                path: "/longForm",
                element: <LongForm></LongForm>
            },
            {
                path: "/shortForm",
                element: <ShortForm></ShortForm>
            }
        ]
    }
]);

export default router;