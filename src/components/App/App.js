import './App.css';
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Register from "../Register/Register";



function Login() {
    return null;
}

function Account() {
    return null;
}

function AboutUs() {
    return null;
}

function ForexTrading() {
    return null;
}

function Tools() {
    return null;
}

function PartnerWithUs() {
    return null;
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/register" element={
                    <>
                        <Header/>
                        <Register/>
                    </>
                }></Route>
                <Route path="/account" element={
                    <>
                        <Header/>
                        <Account/>
                    </>
                }></Route>
                <Route path="/login" element={
                    <>
                        <Header/>
                        <Login/>
                    </>
                }></Route>
                <Route path="/about-us" element={
                    <>
                        <Header/>
                        <AboutUs/>
                    </>
                }></Route>
                <Route path="/forex-trading" element={
                    <>
                        <Header/>
                        <ForexTrading/>
                    </>
                }></Route>
                <Route path="/tools" element={
                    <>
                        <Header/>
                        <Tools/>
                    </>
                }></Route>
                <Route path="/partner-with-us" element={
                    <>
                        <Header/>
                        <PartnerWithUs/>
                    </>
                }></Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
