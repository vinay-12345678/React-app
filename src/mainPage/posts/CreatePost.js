import React, { useCallback, useRef } from "react";
import "./Posts.css";

const newPostTemplate = {
    title: "You",
    subTitle: "1min ago",
    profilePicUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    textBox: {
        icon: "😄",
        text: "text"
    }
};

const CreatePost = ({ onPostPress }) => {
    const textRef = useRef("");

    const onPress = useCallback(() => {
        const trimmedText = textRef.current?.value?.trim();
        if (trimmedText.length > 0) {
            const newPost = {
                ...newPostTemplate,
                textBox: {
                    icon: "😄",
                    text: trimmedText
                }
            };
            onPostPress(newPost);
        } else {
            textRef.current.focus();
        }
        textRef.current.value = "";
    }, []);

    return (
        <div className="box">
            <div className="title">{"Create post"}</div>
            <div className="text-box">
                <div className="icon">
                    <div>{"💬"}</div>
                </div>
                <input
                    className="text"
                    ref={textRef}
                    placeholder="How are you feeling today?"
                    type="text"
                ></input>
            </div>
            <button onClick={onPress}>{"Post"}</button>
        </div>
    );
};

export default React.memo(CreatePost);
