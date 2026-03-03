"use client";

import { useState } from "react";
import Image from "next/image";

export default function SquadsPage() {
  const [openTeam, setOpenTeam] = useState<number | null>(null);

  const teams = [
    {
      name: "FALCONS",
      color: "#f39c12",
      logo: "/logos/falcons.jpeg",
      captain: "Sayooj Thamara Kuniyil",
      viceCaptain: "Shivi Gupta",
      male: [
        "Abhay Lalu","Abhinandan Gopakumar","Atlin Reju","Balaji S","Cherian Jacob",
        "Dhanush D","Dinshith D","G Kishore","Henint Baby Joseph","Hisham Sherief",
        "Jose Joji","Kesavamoorthi Murugan","Manjush Narayana Pillai","Martin Leo",
        "Nirmal Varghese","Prasanth P Joseph","Ramprasad K Thamban","Rizwan Ahammed R",
        "Sayooj Thamara Kuniyil","Sebin Puthiyath","Shyam Narayan",
        "Sidharth Ravindran Nambiar","Sreejith Chathanath","Sreejith Surendran",
        "Steve Joseph","Thejus Rajan","Vedang Manu Verma","Vikas K",
        "Vinoy Koramvalyath","Vishnu P V","Vishnudarsan S Vishnusankar",
        "Thamattor Ravindran","Jay Joshi"
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
      name: "GLADIATORS",
      color: "#e74c3c",
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
        "Richa Mathew","Rose George Kunthara","Saira Biju","Sreepriya S",
        "Vaishnavi Balasubramanian"
      ]
    },
    {
      name: "SPARTANS",
      color: "#3498db",
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
      name: "TITANS",
      color: "#9b59b6",
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
        "Adithya Lakshmi H","Anjali Ajikumar","Ann Mary Biju","Bless Thomas",
        "Gayathri Gireesh","Gopika K","Ishitha Devan","Jaseera K P",
        "Jillian Mendez","Jyothi Prasad","Khadeeja Shafi","Nakshatra P V",
        "Navya Mohan","Shigha Sabu","Suvarna Manoharan",
        "Swapna Mary Shaji","Tania Terrance","Veena M"
      ]
    }
  ];

  const renderPlayers = (players: string[], team: any) =>
    players.map((player, i) => (
      <li key={i} style={{ marginBottom: "4px" }}>
        {player}
        {player === team.captain && " 👑"}
        {player === team.viceCaptain && " ⭐"}
      </li>
    ));

  return (
    <div style={{ background: "#0b0f19", color: "white", minHeight: "100vh", padding: "50px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>Team Squads</h1>

      {teams.map((team, index) => (
        <div key={index} style={{
          marginBottom: "30px",
          borderRadius: "12px",
          background: "#111827",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)"
        }}>
          <div
            onClick={() => setOpenTeam(openTeam === index ? null : index)}
            style={{
              padding: "20px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Image src={team.logo} alt={team.name} width={50} height={50} />
              <h2 style={{ color: team.color }}>{team.name}</h2>
            </div>
            <span>{openTeam === index ? "▲" : "▼"}</span>
          </div>

          {openTeam === index && (
            <div style={{ padding: "30px" }}>
              <p style={{ opacity: 0.7 }}>
                Total: {team.male.length + team.female.length}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginTop: "20px"
              }}>
                <div>
                  <h3 style={{ color: "#3498db" }}>Male Players</h3>
                  <ul style={{ marginTop: "10px" }}>
                    {renderPlayers(team.male, team)}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: "#e91e63" }}>Female Players</h3>
                  <ul style={{ marginTop: "10px" }}>
                    {renderPlayers(team.female, team)}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}