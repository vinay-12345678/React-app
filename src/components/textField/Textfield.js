import React, { useState } from "react";
import "./TextField.css";
import Eye from "../icons/Eye";

const TextField = ({
    title,
    subtitle,
    type = "text",
    inputRef,
    placeholder = "Enter text here..",
    required = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-container">
            <div className="title-container">
                {title && <span className="input-title">{title}</span>}
                {subtitle && <span className="input-title">{subtitle}</span>}
            </div>
            <div className="input-wrapper">
                <input
                    type={showPassword && type === "password" ? "text" : type}
                    ref={inputRef}
                    placeholder={placeholder}
                    className="input-box"
                    required={required}
                />
                {type === "password" && (
                    <span
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? "🙈" : <Eye />}{" "}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TextField;
