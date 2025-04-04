"use client";

import React from "react";
import StatCard from "./StatCard";

const StatsDashboard = () => {
  const statsData = [
    {
      title: "Total Grievances",
      value: "1,234",
      changePercentage: "12%",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/28285ec86512dada4644abfe9362719eb68b90f859c758b8186242d6d1bb5472?placeholderIfAbsent=true",
      isPositiveChange: false,
    },
    {
      title: "Resolution Rate",
      value: "87%",
      changePercentage: "5%",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1f50f85ecb1e4092b652636359b2e2d0a86d76d11c22af352a78c615f39a6e0a?placeholderIfAbsent=true",
      isPositiveChange: true,
    },
    {
      title: "Active Users",
      value: "5,678",
      changePercentage: "8%",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5947b1c885ce00679ae044ecd88c9143c22ffbb45e2266eb97baa2661fda1d60?placeholderIfAbsent=true",
      isPositiveChange: true,
    },
  ];

  return (
    <section className="self-center max-w-full ">
      <div className="flex gap-3 max-md:flex-wrap justify-center">
        {statsData.map((stat, index) => (
          <div
            key={stat.title}
            className={` flex sm:w-[47%] flex-wrap md:w-[33%]  max-md:ml-0 max-sm:w-full`}
          >
            <StatCard 
              title={stat.title}
              value={stat.value}
              changePercentage={stat.changePercentage}
              iconSrc={stat.iconSrc}
              isPositiveChange={stat.isPositiveChange}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsDashboard;
