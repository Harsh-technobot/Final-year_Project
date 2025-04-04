import React from "react";
import StatsDashboard from "./components/StatsDashboard";
import GrievancesSection from "../grievances/components/yourgrievances/YourGrievances";
import TopContributors from "./components/TopContributrs";
import RecentActivityCard from "./components/RecentActivity";
import PieChart3D from "./components/Piechart";
import DonutChart3D from "./components/Piechart";

const Community = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-6 space-y-6">
      {/* Stats Section */}
      <StatsDashboard />

      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Grievances */}
        <div className="w-full lg:w-2/3">
          <GrievancesSection />
        </div>

        {/* Right Section - Top Contributors & Recent Activity */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <TopContributors />
          <RecentActivityCard />
        </div>
      </div>
     <div className="bg-white rounded-lg px-6 py-3">
     <h2 className="text-left text-2xl mb-6 font-semibold text-black/80">Category Distribution</h2>
    <DonutChart3D/>
     </div>
    </div>
  );
};

export default Community;
