import React, { useCallback, useState } from "react";
import LoginAndRegister from "./login/LoginAndRegister";
import "./Home.css";
import MainPage from "./mainPage/MainPage";

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const toggleLogin = useCallback(() => {
        setLoggedIn((prevState) => !prevState);
    }, []);

    return (
        <div>
            {!loggedIn && <LoginAndRegister toggleLogin={toggleLogin} />}
            <MainPage toggleLogin={toggleLogin} />
        </div>
    );
};

export default Home;
