import React from "react";

import clsx from "clsx";

import styles from "./style.module.css";

const Component = ({
  color = "#ff5a1f",
  size = 80,
  className = "",
  style = {},
  progress,
}: {
  color?: string;
  size?: number;
  className?: string;
  style?: object;
  progress?: number;
}) => {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    );
  });

  return (
    <div
      className={clsx(styles["lds-ring"], className)}
      style={{ width: size, height: size, ...style }}
    >
      {progress !== undefined && progress < 100 && (
        <p className="relative left-1/3 top-3/4 text-2xl font-semibold">
          {`${progress < 10 ? "0" : ""}${progress}`}
        </p>
      )}

      {circles}
    </div>
  );
};

Component.displayName = "Ring";
export default Component;
