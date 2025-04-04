"use client";
import React from "react";

function SearchBar({ placeholder, onSearchChange }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative w-[300px] max-sm:w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="lg:p-2.5 p-1.5 w-full rounded-3xl border border-solid border-black border-opacity-20"
        onChange={handleInputChange}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.85593 4.11739C7.1902 3.22585 8.75888 2.75 10.3636 2.75H10.3636C12.5154 2.75014 14.5791 3.605 16.1006 5.12655C17.6222 6.64811 18.4771 8.71174 18.4772 10.8635V10.8636C18.4772 12.4683 18.0013 14.037 17.1098 15.3713C16.2183 16.7055 14.9511 17.7455 13.4685 18.3596C11.986 18.9737 10.3546 19.1344 8.78071 18.8213C7.20683 18.5082 5.76113 17.7355 4.62642 16.6008C3.49171 15.4661 2.71897 14.0204 2.4059 12.4465C2.09284 10.8726 2.25352 9.24122 2.86761 7.75866C3.48171 6.27609 4.52165 5.00892 5.85593 4.11739ZM10.3635 4.25C9.05552 4.25001 7.77687 4.63789 6.68928 5.36459C5.60168 6.0913 4.754 7.1242 4.25343 8.33268C3.75287 9.54116 3.6219 10.8709 3.87708 12.1538C4.13227 13.4368 4.76215 14.6152 5.68708 15.5401C6.61201 16.465 7.79044 17.0949 9.07335 17.3501C10.3563 17.6053 11.686 17.4743 12.8945 16.9738C14.103 16.4732 15.1359 15.6255 15.8626 14.5379C16.5893 13.4503 16.9772 12.1717 16.9772 10.8636M10.3636 4.25C12.1176 4.25012 13.7997 4.94695 15.04 6.18721C16.2802 7.42748 16.9771 9.1096 16.9772 10.8636"
            fill="black"
            fillOpacity="0.63"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3271 15.827C15.62 15.5341 16.0949 15.5341 16.3878 15.827L21.5304 20.9697C21.8233 21.2626 21.8233 21.7374 21.5304 22.0303C21.2375 22.3232 20.7626 22.3232 20.4697 22.0303L15.3271 16.8877C15.0342 16.5948 15.0342 16.1199 15.3271 15.827Z"
            fill="black"
            fillOpacity="0.63"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
