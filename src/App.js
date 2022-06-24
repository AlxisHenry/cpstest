import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navbar/navbar";
import ButtonClick from "./components/Button-Click/button-click";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/click" element={<ClickTest/>} />
            </Routes>
        </>
    );
}

const Homepage = () => {
    return (
        <>
            <Navigation/>
        </>
    );
}

const ClickTest = () => {
    return (
        <>
            <Navigation/>
            <ButtonClick content={"Click Here"}/>
        </>
    );
}

export default App