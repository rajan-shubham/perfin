import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");

    return (
        <div className="bg-gray-900 fixed top-0 w-full flex justify-between text-white z-10">
            <div className="flex justify-center items-center space-x-6">
                <h1 className="py-2 px-4 text-4xl">Perfin</h1>
            </div>
            <div className="bg-gray-900 py-4 flex justify-end">
                <div className="flex space-x-6">
                    <button className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#">Home</a></button>
                    <button className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#service">Service</a></button>
                    <button className="hover:bg-sky-500 py-2 px-4 rounded-lg"><a href="#contact">Contact</a></button>
                    <button className="hover:bg-sky-500 py-2 px-4 rounded-lg" onClick={() => { btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In"); }}> {btnName} </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
