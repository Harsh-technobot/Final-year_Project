"use client";

import React from "react";

/**
 * ActivityItem component displays a single activity with an icon, description, and timestamp
 * This is an internal component used by RecentActivityCard
 */
const ActivityItem = ({ iconSrc, description, time }) => {
  return (
    <article className="flex gap-3 pr-14 w-full max-md:pr-5">
      <figure className="flex overflow-hidden justify-center items-center self-start mt-1 min-h-4">
        <img
          src={iconSrc}
          alt=""
          className="object-contain self-stretch my-auto w-4 aspect-square"
          aria-hidden="true"
        />
      </figure>
      <div className="flex flex-col grow shrink-0 py-1 leading-none basis-0 w-fit">
        <p className="text-sm text-black">{description}</p>
        <time className="self-start mt-1.5 text-xs text-gray-500">{time}</time>
      </div>
    </article>
  );
};

/**
 * RecentActivityCard component displays a card with recent activity items
 *
 * @param {Object} props - Component props
 * @param {Array} [props.activities] - Array of activity items (optional, defaults to sample data if not provided)
 */
const RecentActivityCard = ({ activities }) => {
  // Default activities if none are provided
  const defaultActivities = [
    {
      id: 1,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02f976960a4a9fa17fa7a794b271bd5411e1691da2f858f6a9b53298c70de60e?placeholderIfAbsent=true",
      description: "Pothole repair completed on Main Street",
      time: "30 minutes ago",
    },
    {
      id: 2,
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b2dc5a3180453eb709082a44846cbadb7acff536eb0fe50549a8bfa5d9cbaea1?placeholderIfAbsent=true",
      description: "New grievance reported in Block B",
      time: "1 hour ago",
    },
  ];

  // Use provided activities or fall back to default
  const activityItems = activities || defaultActivities;

  return (
    <section className="flex-1 p-6 mt-6 w-full bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
      <h3 className="py-1.5 w-full text-lg font-semibold text-black">
        Recent Activity
      </h3>
      <div className="mt-4 w-full">
        {activityItems.map((activity, index) => (
          <div key={activity.id} className={index > 0 ? "mt-4" : ""}>
            <ActivityItem
              iconSrc={activity.iconSrc}
              description={activity.description}
              time={activity.time}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivityCard;
