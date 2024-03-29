import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hello from './Hello';

const Views = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/hello" element={<Hello />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Views;