import { FunctionComponent } from "react";

export const ArrowLeft: FunctionComponent<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="14"
      height="26"
      viewBox="0 0 14 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2L1.5 13L12.5 24"
        stroke={color}
        stroke-width="2.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
