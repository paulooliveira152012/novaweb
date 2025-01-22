import * as React from "react";
const Arrow = (props) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.11035 27.5361L27.4254 7.22106"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.4251 21.4416V7.22107H13.2046"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Arrow;
