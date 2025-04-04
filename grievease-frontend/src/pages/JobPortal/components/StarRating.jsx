import React from "react";

function StarRating({ rating, reviews }) {
  return (
    <div className="flex gap-2 items-center mb-2">
      <div>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[16px]"
        >
          <g clipPath="url(#clip0_star)">
            <path
              d="M9.90352 0.5625C9.7379 0.21875 9.3879 0 9.00352 0C8.61915 0 8.27227 0.21875 8.10352 0.5625L6.09415 4.69688L1.60665 5.35938C1.23165 5.41562 0.919147 5.67812 0.803522 6.0375C0.687897 6.39687 0.781647 6.79375 1.0504 7.05937L4.30665 10.2812L3.5379 14.8344C3.4754 15.2094 3.63165 15.5906 3.94102 15.8125C4.2504 16.0344 4.65977 16.0625 4.99727 15.8844L9.00665 13.7437L13.016 15.8844C13.3535 16.0625 13.7629 16.0375 14.0723 15.8125C14.3816 15.5875 14.5379 15.2094 14.4754 14.8344L13.7035 10.2812L16.9598 7.05937C17.2285 6.79375 17.3254 6.39687 17.2066 6.0375C17.0879 5.67812 16.7785 5.41562 16.4035 5.35938L11.9129 4.69688L9.90352 0.5625Z"
              fill="#FBBF24"
            />
          </g>
          <defs>
            <clipPath id="clip0_star">
              <path d="M0 0H18V16H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="text-base leading-4 text-black">
        {rating} ({reviews} reviews)
      </p>
    </div>
  );
}

export default StarRating;
