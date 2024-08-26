import * as React from "react";
const Message = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#C5C7CA"
            fillRule="evenodd"
            d="M17.333 1.833H2.667a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5H10a.5.5 0 0 1 .354.147l3.146 3.146v-2.793a.5.5 0 0 1 .5-.5h3.333a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5Zm-14.666-1h14.666a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5H14.5v3.5a.5.5 0 0 1-.854.354l-3.853-3.854H2.667a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Message;
