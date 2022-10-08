import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Homepage from "./components/Homepage";
import Layout from "./layouts/Layout";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout></Layout>}>
                <Route
                    path="/"
                    loader={async () => fetch("https://restcountries.com/v3.1/all")}
                    element={<Homepage></Homepage>}></Route>
                <Route
                    path="/home"
                    loader={async () => fetch("https://restcountries.com/v3.1/all")}
                    element={<Homepage></Homepage>}></Route>
                <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
            </Route>
        )
    );
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
