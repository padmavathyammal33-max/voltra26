"use client";

import { useEffect, useState } from "react";

type Winner = {
  Type: string;
  Gender: string;
  Event: string;
  Position: string;
  Winner: string;
  Team: string;
};

export default function WinnersPage() {
  const [data, setData] = useState<Winner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZyRvH3UURgOwZhRj8KTymP05AlIRw5bmwwvRrj2XUXjQ1sfnkq0MFAzcY44776VdtJOTFlrd8_0T5/pub?gid=0&single=true&output=csv"
      );

      const csvText = await response.text();

      const rows = csvText
        .trim()
        .split("\n")
        .slice(1);

      const formattedData = rows.map((row) => {
        const columns = row.split(",").map((col) => col.trim());

        return {
          Type: columns[0] || "",
          Gender: columns[1] || "",
          Event: columns[2] || "",
          Position: columns[3] || "",
          Winner: columns[4] || "",
          Team: columns[5] || "",
        };
      });

      setData(formattedData);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading Winners...
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-yellow-400">
        Voltra'26 Winners
      </h1>

      {data.length === 0 && (
        <div className="text-center text-red-400">
          No data found. Check sheet publish settings.
        </div>
      )}

      {data.map((item, index) => (
        <div
          key={index}
          className="mb-6 p-6 rounded-xl bg-gray-900 border border-gray-700 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-yellow-300">
            {item.Event}
          </h2>

          <p className="text-gray-400">
            {item.Type} • {item.Gender}
          </p>

          <div className="mt-2 text-lg">
            🏅 Position: {item.Position}
          </div>

          <div className="text-lg">
            👤 Winner: {item.Winner}
          </div>

          <div className="text-lg">
            🛡 Team: {item.Team}
          </div>
        </div>
      ))}
    </div>
  );
}