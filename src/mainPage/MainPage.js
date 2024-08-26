import React, { useCallback, useState } from "react";
import { mainPageMockedData } from "./constant";
import "./MainPage.css";
import Posts from "./posts/Posts";
import CreatePost from "./posts/CreatePost";

const MainPage = () => {
    const [posts, setPosts] = useState(mainPageMockedData);
    const onPostPress = useCallback((newPostObject) => {
        setPosts((old) => {
            return [newPostObject, ...old];
        });
    }, []);

    return (
        <div className="main-page">
            <p className="main-heading">{"Hello Jane"}</p>
            <p className="main-sub-heading">
                {
                    "How are you doing today? Would you like to share something with the community 🤗"
                }
            </p>
            <CreatePost onPostPress={onPostPress} />
            {posts.map((item, index) => (
                <Posts item={item} key={index} />
            ))}
        </div>
    );
};

export default MainPage;
