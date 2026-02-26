import Image from "next/image";

export default function Teams() {
  const teams = [
    {
      name: "Falcons",
      logo: "/logos/falcons.jpeg",
      border: "border-yellow-400/40",
      glow: "shadow-yellow-500/50",
    },
    {
      name: "Gladiators",
      logo: "/logos/gladiators.jpeg",
      border: "border-red-500/40",
      glow: "shadow-red-500/50",
    },
    {
      name: "Titans",
      logo: "/logos/titans.jpeg",
      border: "border-red-800/40",
      glow: "shadow-red-800/50",
    },
    {
      name: "Spartans",
      logo: "/logos/spartans.jpeg",
      border: "border-blue-500/40",
      glow: "shadow-blue-500/50",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Subtle premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="relative z-10 px-6 py-20">

        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-widest bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          OUR TEAMS
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {teams.map((team) => (
            <div
              key={team.name}
              className={`relative p-10 rounded-3xl bg-white/5 backdrop-blur-md border ${team.border} shadow-2xl ${team.glow} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex flex-col items-center">

                <div className="w-32 h-32 relative mb-6">
                  <Image
                    src={team.logo}
                    alt={team.name}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>

                <h2 className="text-3xl font-bold tracking-wider uppercase">
                  {team.name}
                </h2>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}