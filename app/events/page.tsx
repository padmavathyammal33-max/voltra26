export default function Events() {
  const sections = [
    {
      title: "Men’s Team Events",
      events: ["Cricket", "Football", "Handball", "Tug of War"],
    },
    {
      title: "Women’s Team Events",
      events: ["Handball"],
    },
    {
      title: "Men’s Individual Events",
      events: [
        "Badminton – Singles",
        "Badminton – Doubles",
        "Table Tennis – Singles",
        "Table Tennis – Doubles",
        "Carroms – Doubles",
      ],
    },
    {
      title: "Women’s Individual Events",
      events: [
        "Badminton – Singles",
        "Badminton – Doubles",
        "Table Tennis – Singles",
        "Table Tennis – Doubles",
        "Carroms – Doubles",
      ],
    },
    {
      title: "Mixed Events",
      events: ["Badminton", "Table Tennis", "Carroms"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-widest bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          EVENTS
        </h1>

        {/* Sections */}
        <div className="space-y-16">

          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400 tracking-wide">
                {section.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {section.events.map((event) => (
                  <div
                    key={event}
                    className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-yellow-400/40 transition duration-300 hover:scale-105"
                  >
                    <p className="text-lg tracking-wide">
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}