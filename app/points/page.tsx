import Image from "next/image";

export const revalidate = 60;

type Row = {
  Team: string;
  Points: string;
};

async function getPoints(): Promise<Row[]> {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZyRvH3UURgOwZhRj8KTymP05AlIRw5bmwwvRrj2XUXjQ1sfnkq0MFAzcY44776VdtJOTFlrd8_0T5/pub?gid=0&single=true&output=csv",
    { next: { revalidate: 60 } }
  );

  const text = await res.text();

  const rows = text
    .trim()
    .split("\n")
    .slice(1)
    .map((row) => row.split(","));

  return rows.map((row) => ({
    Team: row[5],
    Points: row[6],
  }));
}

export default async function PointsPage() {
  const data = await getPoints();

  const totals: Record<string, number> = {};

  data.forEach((item) => {
    const team = item.Team?.toLowerCase().trim();
    const points = Number(item.Points) || 0;

    if (!team) return;

    if (!totals[team]) totals[team] = 0;
    totals[team] += points;
  });

  const leaderboard = Object.entries(totals)
    .map(([team, total]) => ({
      team,
      total,
    }))
    .sort((a, b) => b.total - a.total);

  const logoMap: Record<string, string> = {
    falcons: "/logos/falcons.jpeg",
    titans: "/logos/titans.jpeg",
    spartans: "/logos/spartans.jpeg",
    gladiators: "/logos/gladiators.jpeg",
  };

  return (
    <div className="relative min-h-screen text-white">

      {/* Background Image */}
      <Image
        src="/points-bg.jpeg"
        alt="Points Background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Content Container */}
      <div className="px-4 sm:px-6 md:px-10 py-12 bg-black/40 min-h-screen">

        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 text-center">
          📊 Points Table
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {leaderboard.map((team, index) => {
            const logo = logoMap[team.team] || "/logos/default.png";

            const rankStyles = [
              "bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.6)]",
              "bg-gradient-to-r from-gray-400 to-gray-200",
              "bg-gradient-to-r from-amber-700 to-amber-500",
            ];

            const bgStyle =
              index < 3
                ? rankStyles[index]
                : "bg-gradient-to-r from-gray-800 to-gray-900";

            return (
              <div
                key={team.team}
                className={`${bgStyle} rounded-xl p-5 flex items-center justify-between shadow-xl transition hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">
                    #{index + 1}
                  </span>

                  <Image
                    src={logo}
                    alt={team.team}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <span className="text-lg sm:text-xl capitalize font-bold">
                    {team.team}
                  </span>
                </div>

                <span className="text-xl sm:text-2xl font-extrabold">
                  {team.total} pts
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}