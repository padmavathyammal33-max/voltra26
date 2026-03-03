import Image from "next/image";

type TeamData = {
  name: string;
  logo: string;
  captain: string;
  viceCaptain: string;
  male: string[];
  female: string[];
};

const teams: TeamData[] = [
  {
    name: "Falcons",
    logo: "/logos/falcons.jpeg",
    captain: "Sayooj Thamara Kuniyil",
    viceCaptain: "Shivi Gupta",
    male: [
      "Abhay Lalu","Abhinandan Gopakumar","Atlin Reju","Balaji S","Cherian Jacob",
      "Dhanush D","Dinshith D","G Kishore","Henint Baby Joseph","Hisham Sherief",
      "Jose Joji","Kesavamoorthi Murugan","Manjush Narayana Pillai","Martin Leo",
      "Nirmal Varghese","Prasanth P Joseph","Ramprasad K Thamban",
      "Rizwan Ahammed R","Sayooj Thamara Kuniyil","Sebin Puthiyath",
      "Shyam Narayan","Sidharth Ravindran Nambiar","Sreejith Chathanath",
      "Sreejith Surendran","Steve Joseph","Thejus Rajan","Vedang Manu Verma",
      "Vikas K","Vinoy Koramvalyath","Vishnu P V",
      "Vishnudarsan S Vishnusankar","Thamattor Ravindran","Jay Joshi"
    ],
    female: [
      "Anakha K","Anupam Maria Sajan","Aparna P G","Aswathy","Athira Manoj",
      "Dhanya Aneesh Nair","Dhanya OK","Diya Nair Kannoli","Fathima Shereef",
      "Fathima Zayana K P","Felishia Mathew","Gouri Parvathy M","Jincy Jose",
      "Karthika S","Parvathy S","Podili Divya Bhanu","Shini Pious",
      "Shivi Gupta","Sona Ponnachen","Vrinda Vijayan"
    ]
  },
  {
    name: "Gladiators",
    logo: "/logos/gladiators.jpeg",
    captain: "Ajai Thomas",
    viceCaptain: "Anjana Krishna K",
    male: [
      "Abdul","Abhishek P","Abhishek P B","Achuthapramod K K","Ajai Thomas",
      "Alwin Reju","Amal Tomson","Anandakrishnan S K","Anoop Babu",
      "Ashiq Muhammed","Aswin Ajayan","George K Leego","Goutham Krishna V",
      "Kiran Jose","Kishor Kannan","Kshitheesha","Navneeth Krishnan",
      "Nithin P B","Noble Sam","Prajith Njarakunnath Rajan","Pranev K",
      "Rahul Thomas","Ram Govind P","Renjith K Royce","Rohan George",
      "Sandeep Kumar Reddy","Sanjay Shajan","Sasi Unnikrishnan Menon",
      "Sebin","Serin Shaji","Tony Jose","Vibin Alanthatta Madathil"
    ],
    female: [
      "Abinaya B","Adheena Biju","Anjana Krishna K","Ann Mary Varghese",
      "Anu Maria Tom","Anu Valsan","Aparna Mohanan","Gopika Das R",
      "Jesli Sharon A R","Julin Dann","Kavya","Lalla Plakkudiyil Meeran",
      "Maria Roy","Najma Mohammad Ali","Nandana R Nair","Neha Cyriac",
      "Richa Mathew","Rose George Kunthara","Saira Biju",
      "Sreepriya S","Vaishnavi Balasubramanian"
    ]
  },
  {
    name: "Spartans",
    logo: "/logos/spartans.jpeg",
    captain: "Rithindas P",
    viceCaptain: "Dayana Mariya Tomy",
    male: [
      "Abhishek N R","Ajith B","Akhil Palamannyil Geethadevi","Alan V Paul",
      "Alvin Kallely Varghese","Amal Nassar","Anandu Vareesh Kumar",
      "Arun Mohan","Aswin P K","Bayapalli Venkata Sita Lakshmi Tejendra",
      "Bhagath Krishna Rajeev","Boney Malayil Thampy","Dhanesh G",
      "Joe Paul P","John E Kurian","Kabilesh R","Latheesh Anandan",
      "Manoj S","Milan Zacharia","Muruganantham T","Padmanabhan S",
      "Rahul Dinesh","Rahul George Paul","Rehan K","Rithindas P",
      "Roshan R Nair","Sajeev J","Saurabh Sasikumar","Sidharth",
      "Solomon Joseph","Subin K Menon"
    ],
    female: [
      "Akshima P S","Anjali Babu","Aparna Sunil","Archana G","C A Aruna",
      "Christy Rachel Sam","Daya Haridas","Dayana Mariya Tomy","Deepa P K",
      "Devanandana B","Donna Sunny","Fidha Fathima","Gopika M S",
      "Karthika K R","Mayusha Subash","Pravya Prakash L","Saira Mary Sam",
      "Sandra Paul","Sneha V Yadav","Soorya P",
      "Sreeparvathi Lalitha Kumari","Vinisha S"
    ]
  },
  {
    name: "Titans",
    logo: "/logos/titans.jpeg",
    captain: "Evin Vincent N B",
    viceCaptain: "Bless Thomas",
    male: [
      "Abhijith B","Abhijith Krishnan","Adhish Sreekumar","Akhil Kumar A",
      "Alan Alex","Alan Thomas","Aravind H","Ashin K S","Aswin K",
      "Blesson K","Cyril Thomas","Devadarshan A","Evin Vincent N B",
      "Gopu Krishnan G","Harish Hari","Jaison Martin Panakkal Joseph",
      "Jithin George","Jithin K S Joseph Kochumman Komalath",
      "Krishna Gopal S","Manoj I S","Midhun Chandra","Mohammed Anish",
      "Muhammed Sahal V A","N Poorna Chandra Kumar","Nithin Varghese",
      "Noel Joseph","Praveen C S","Premshad N V",
      "Reghu Raj Chulliyel Varadarajan Nair","Sathish E","Sebastian",
      "Shijas Ap","Vijayakumar S","Vipin James","Varadarajan Nair"
    ],
    female: [
      "Adithya Lakshmi H","Anjali Ajikumar","Ann Mary Biju",
      "Bless Thomas","Gayathri Gireesh","Gopika K","Ishitha Devan",
      "Jaseera K P","Jillian Mendez","Jyothi Prasad","Khadeeja Shafi",
      "Nakshatra P V","Navya Mohan","Shigha Sabu","Suvarna Manoharan",
      "Swapna Mary Shaji","Tania Terrance","Veena M"
    ]
  }
];

export default function SquadsPage() {
  return (
    <div className="bg-black text-white">
      {teams.map((team) => (
        <section
          key={team.name}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <Image
            src={team.logo}
            alt={team.name}
            fill
            priority
            sizes="100vw"
            className="object-contain md:object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl w-full px-6 py-16 overflow-y-auto h-full">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 text-center">
              {team.name}
            </h2>

            <div className="text-center mb-10">
              <p>👑 Captain: <span className="font-bold">{team.captain}</span></p>
              <p>⭐ Vice Captain: <span className="font-bold">{team.viceCaptain}</span></p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Male Players ({team.male.length})
                </h3>
                <ul className="space-y-2">
                  {team.male.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                  Female Players ({team.female.length})
                </h3>
                <ul className="space-y-2">
                  {team.female.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}