import React from "react";

function EmptyHeart(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="heart"
      className="prefix__svg-inline--fa prefix__fa-heart"
      xmlns="http://www.w3.org/2000/svg"
      width = "16"
      height = "16"
      viewBox = "0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98L256 96.25l-19.7-20.27C208.6 47.4 170.8 32 133.3 32c-30.2 0-60.07 9.93-84.26 30.86-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7c6.39 6.54 14.59 9.84 22.89 9.84 8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1L256 424.9 74.34 237.1c-32.24-33.3-39.88-99 6.12-137.95 39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92 54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z"
      />
    </svg>
  )
}

export default EmptyHeart;