import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hello from './Hello';
import BooksGrid from './BooksGrid'

const Views = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/hello" element={<Hello />} />
            <Route path="/books" element={<BooksGrid />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Views;