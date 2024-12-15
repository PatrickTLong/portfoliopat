import Home from "./Home"
import NotesPage from "./Notespg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
    return (
    
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesPage />} />
        </Routes>
    </Router>
    )
}

