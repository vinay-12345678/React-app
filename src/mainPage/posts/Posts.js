import React from "react";
import "./Posts.css";
import Message from "../../components/icons/Message";

const Posts = ({ item, key }) => {
    return (
        <div key={key} className="box">
            <div className="profile-header">
                <div className="profile-pic">
                    {item?.profilePicUrl ? (
                        <img
                            src={item.profilePicUrl}
                            alt={`${item?.title}'s profile`}
                        />
                    ) : (
                        <div className="placeholder-pic">Profile</div>
                    )}
                </div>
                <div className="profile-info">
                    {item?.title && <div className="title">{item.title}</div>}
                    {item?.subTitle && (
                        <div className="sub-title">{item.subTitle}</div>
                    )}
                </div>
            </div>
            <div className="text-box">
                {item?.textBox?.icon && (
                    <div className="icon">
                        <div>{item.textBox.icon}</div>
                    </div>
                )}
                {item?.textBox?.text && (
                    <div className="text">{item.textBox.text}</div>
                )}
            </div>
            {item?.comments && (
                <div className="comments">
                    <Message /> <p> {item.comments} Comments</p>
                </div>
            )}
        </div>
    );
};

export default React.memo(Posts);
