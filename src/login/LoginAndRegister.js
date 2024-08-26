import React, { useCallback, useRef, useState } from "react";
import "./LoginAndRegister.css";
import TextField from "../components/textField/Textfield";
import Cross from "../components/icons/Cross";

const LoginAndRegister = ({ toggleLogin, showRegisterInitially = false }) => {
    const [showRegister, setShowRegister] = useState(showRegisterInitially);

    const eMailRef = useRef("");
    const userNameRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = useCallback((event) => {
        event.preventDefault();

        const eMail = eMailRef.current?.value;
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;

        toggleLogin({ eMail, username, password });
        console.log("Login Attempt: ", { eMail, username, password });
    }, []);

    const toggeShowRegister = () => {
        setShowRegister((old) => !old);
    };

    const handleRegisterClick = () => {
        toggeShowRegister();
    };

    return (
        <div className="container">
            <div className="login-box">
                <button className="close-btn" onClick={toggleLogin}>
                    <Cross />
                </button>
                <p className="sub-heading">
                    {showRegister ? "SIGN UP" : "WELCOME BACK"}
                </p>
                <p className="heading">
                    {showRegister
                        ? "Create an account to continue"
                        : "Log into your account"}
                </p>
                <form onSubmit={handleLogin}>
                    {showRegister && (
                        <TextField
                            title={"Email"}
                            inputRef={eMailRef}
                            placeholder={"Enter your email"}
                            type="email"
                            required
                        />
                    )}
                    <TextField
                        title={showRegister ? "Username" : "Email or Username"}
                        inputRef={userNameRef}
                        placeholder={
                            showRegister
                                ? "Choose a preferred username"
                                : "Enter your email or username"
                        }
                        required
                    />
                    <TextField
                        inputRef={passwordRef}
                        title={"Password"}
                        subtitle={"Forgot password?"}
                        placeholder={
                            showRegister
                                ? "Choose a strong password"
                                : "Enter your password"
                        }
                        type="password"
                        required
                    />
                    <button type="submit">
                        {showRegister ? "Continue" : "Login now"}
                    </button>
                    {showRegister ? (
                        <p className="register-link">
                            Already have an account?{" "}
                            <span onClick={handleRegisterClick}>Login →</span>
                        </p>
                    ) : (
                        <p className="register-link">
                            Not registered yet?{" "}
                            <span onClick={handleRegisterClick}>
                                Register →
                            </span>
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginAndRegister;
