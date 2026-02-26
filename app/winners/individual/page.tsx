import Image from "next/image";

export const revalidate = 60;

type Winner = {
  Type: string;
  Gender: string;
  Event: string;
  Position: string;
  Winner: string;
  Team: string;
};

async function getWinners(): Promise<Winner[]> {
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
    Type: row[0],
    Gender: row[1],
    Event: row[2],
    Position: row[3],
    Winner: row[4],
    Team: row[5],
  }));
}

function getMedal(position: string) {
  if (position === "1") return "🥇";
  if (position === "2") return "🥈";
  if (position === "3") return "🥉";
  return `#${position}`;
}

export default async function IndividualPage() {
  const data = await getWinners();

  const individualData = data.filter(
    (item) => item.Type?.toLowerCase().trim() === "individual"
  );

  const grouped = individualData.reduce((acc: any, curr) => {
    if (!acc[curr.Event]) acc[curr.Event] = [];
    acc[curr.Event].push(curr);
    return acc;
  }, {});

  const logoMap: Record<string, string> = {
    falcons: "/logos/falcons.jpeg",
    titans: "/logos/titans.jpeg",
    spartans: "/logos/spartans.jpeg",
    gladiators: "/logos/gladiators.jpeg",
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-10 text-center">
        🏅 Individual Champions
      </h1>

      {Object.entries(grouped).map(([event, winners]: any) => (
        <div key={event} className="mb-12">
          <h2 className="text-xl sm:text-2xl text-orange-400 mb-6">
            {event}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {winners
              .sort(
                (a: Winner, b: Winner) =>
                  Number(a.Position) - Number(b.Position)
              )
              .map((item: Winner, index: number) => {
                const teamKey = item.Team?.toLowerCase().trim();
                const logo =
                  logoMap[teamKey] || "/logos/default.png";

                return (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-lg flex items-center gap-4 sm:gap-6"
                  >
                    <Image
                      src={logo}
                      alt={item.Team}
                      width={60}
                      height={60}
                      className="rounded-full border border-gray-600"
                    />

                    <div>
                      <p className="text-lg font-bold">
                        {getMedal(item.Position)} {item.Winner}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.Team}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {item.Gender}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}