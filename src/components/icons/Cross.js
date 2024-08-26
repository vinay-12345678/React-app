import * as React from "react";
const Cross = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M12.575 4.309a.625.625 0 0 0-.883-.884L8 7.116 4.31 3.425a.625.625 0 1 0-.884.884L7.116 8l-3.691 3.691a.625.625 0 0 0 .884.884L8 8.884l3.691 3.691a.625.625 0 1 0 .884-.884L8.884 8l3.691-3.691Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Cross;
