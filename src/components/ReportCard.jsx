import React from "react";
import { Calendar, Download } from "lucide-react";

export default function ReportCard({
  title,
  desc,
  date,
  colorClass = "bg-blue-100 text-blue-700",
  onGenerate,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-md shrink-0 ${colorClass}`}>
            {/* small icon placeholder */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 10h16M4 14h10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium truncate">{title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {desc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
          <Calendar className="h-4 w-4" />
          <span>Last: {date}</span>
        </div>

        <div className="flex gap-2 mt-3">
          <button className="text-xs border rounded-md px-2 py-1">PDF</button>
          <button className="text-xs border rounded-md px-2 py-1">Excel</button>
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 text-white py-2 text-sm hover:bg-emerald-900 transition"
      >
        <Download className="h-4 w-4" />
        Generate Report
      </button>
    </div>
  );
}
