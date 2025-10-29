import React from "react";

interface StatsCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  sub: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, title, value, sub }) => {
  return (
    <div className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border dark:border-slate-700 transition">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="text-gray-700 dark:text-gray-200 font-medium">{title}</h4>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
          <span className="text-sm text-gray-500">{sub}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
