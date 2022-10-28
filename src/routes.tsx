import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Favorites } from "./pages/Favorites";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}