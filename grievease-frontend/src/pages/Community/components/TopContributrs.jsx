"use client";
import React, { useState, useEffect } from "react";

function TopContributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Demo data to use as fallback
  const demoContributors = [
    {
      id: 1,
      name: "Sarah Johnson",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0bb0a436a643a2692745d0d1fb6ec5cf705cdbc3bbb5948f5efc1086ed5fcda0?placeholderIfAbsent=true",
      points: 1234,
      pointsIconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6da399364ded25953a216a89714a05333ff3fbfb3e3993ee6ef5b8090253a679?placeholderIfAbsent=true",
      status: "Top Helper",
      statusType: "helper",
    },
    {
      id: 2,
      name: "Mike Brown",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e295695326edb8002523e436ee80f250fa6bb98e111755312b1ec79b7f06f14a?placeholderIfAbsent=true",
      points: 987,
      pointsIconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ef0bf1b61d3c6c3a6dd869cccc86a907b81d414fcc5ac0c9daa56857218503e5?placeholderIfAbsent=true",
      status: "Active",
      statusType: "active",
    },
    {
      id: 3,
      name: "Mike Brown",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e295695326edb8002523e436ee80f250fa6bb98e111755312b1ec79b7f06f14a?placeholderIfAbsent=true",
      points: 987,
      pointsIconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c333b57a173e16705016f6e8e84fa858aa40341bb4246f95e1caadbaa977f6ae?placeholderIfAbsent=true",
      status: "Active",
      statusType: "active",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch("https://api.example.com/contributors");

        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }

        const data = await response.json();
        setContributors(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching contributors:", err);
        setError("Failed to load contributors. Using demo data instead.");
        setContributors(demoContributors);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.03)] border border-gray-100 max-md:px-5">
      <div className="py-1.5 w-full text-lg font-semibold text-gray-800 max-md:pr-5">
        Top Contributors
      </div>

      {error && <p className="text-sm text-amber-600 mt-2">{error}</p>}

      <div className="mt-4 w-full">
        {loading ? (
          // Loading skeleton
          <>
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`flex gap-5 justify-between w-full max-w-[352px] ${index > 1 ? "mt-3.5" : ""}`}
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse"></div>
                  <div className="py-px">
                    <div className="h-4 w-24 bg-gray-100 animate-pulse rounded"></div>
                    <div className="mt-2.5 h-3 w-20 bg-gray-100 animate-pulse rounded"></div>
                  </div>
                </div>
                <div className="h-6 w-16 bg-gray-100 animate-pulse rounded my-auto"></div>
              </div>
            ))}
          </>
        ) : (
          // Actual content
          <>
            {contributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className={`flex gap-5 justify-between w-full max-w-[352px] ${index > 0 ? "mt-3.5" : ""}`}
              >
                <div className="flex gap-3">
                  <img
                    src={contributor.image}
                    className="object-contain shrink-0 my-auto w-10 rounded-full aspect-square"
                    alt={`${contributor.name}'s profile`}
                  />
                  <div className="py-px">
                    <div className="text-base font-semibold leading-none text-gray-800 max-md:mr-0.5">
                      {contributor.name}
                    </div>
                    <div className="flex gap-1 py-1 mt-2.5 w-full">
                      <div className="flex overflow-hidden justify-center items-center self-start min-h-3">
                        <img
                          src={contributor.pointsIconUrl}
                          className="object-contain self-stretch my-auto w-3.5 aspect-[1.17]"
                          alt="Points icon"
                        />
                      </div>
                      <div className="text-sm leading-none text-gray-500">
                        {typeof contributor.points === "number"
                          ? contributor.points.toLocaleString()
                          : contributor.points}{" "}
                        points
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`px-2.5 py-1.5 my-auto text-xs rounded ${
                    contributor.statusType === "helper"
                      ? "text-blue-700 bg-blue-50 border border-blue-100"
                      : contributor.statusType === "active"
                        ? "text-green-700 bg-green-50 border border-green-100"
                        : "text-gray-700 bg-gray-50 border border-gray-100"
                  }`}
                >
                  {contributor.status}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default TopContributors;
