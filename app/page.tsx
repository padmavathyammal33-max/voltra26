import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Background (NO CROP VERSION) */}
      <div className="absolute inset-0 -z-10 bg-black flex items-center justify-center">
        <img
          src="/hero.jpeg"
          alt="Voltra Background"
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          VOLTRA'26
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-12">
          HCLTech Sports Day – Where Teams Compete. Legends Rise.
        </p>

        

          
        

        </div>

      </div>
    
  )
}