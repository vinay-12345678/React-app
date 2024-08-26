import React, { useCallback, useRef, useState } from "react";
import LoginAndRegister from "./login/LoginAndRegister";
import "./Home.css";
import MainPage from "./mainPage/MainPage";

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const userDetails = useRef({ eMail: "", username: "", password: "" });

    const toggleLogin = useCallback((data) => {
        userDetails.current = data;
        setLoggedIn((prevState) => !prevState);
    }, []);

    return (
        <div>
            {!loggedIn && <LoginAndRegister toggleLogin={toggleLogin} />}
            <MainPage userDetails={userDetails} />
        </div>
    );
};

export default Home;
