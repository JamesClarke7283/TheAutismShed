import Wellcome from "../components/Wellcome.tsx";
import PhotoGrid from "../components/PhotoGrid.tsx";
export default function Home() {
  const grid_props = [
    {
      title: "Georgie Bainbridge",
      img: "./images/staff/georgieb-1.jpg",
      tags: ["Director", "Chartered Psychologist", "DCPsych CPsychol BPS", "HCPC Registered", "Psychotherapist UKCP", "Relational Doctoral Research Supervisor"],
      url: "https://git.jamesdavidclarke.com/james/",
    },
    {
      title: "Claire Madeira",
      img: "./images/staff/clairem.jpg",
      tags: ["Lead Paediatric Autism", "Highly Specialist Speech and Language Consultant"],
      url: "https://jamesdavidclarke.com/tutorials",
    },
    {
      title: "Jim Sharman",
      img: "./images/staff/placeholder-headshot.png",
      tags: ["Autism Specialist Mentor", "Inclusion Consultant"],
      url: "https://www.savvysenders.com/",
    },
    {
      title: "Carrie Overton",
      img: "./images/staff/carrieo.jpg",
      tags: ["Neurodiversity Coach","SEN","Education Consultant"],
      url: "https://www.jamesdavidclarke.com/",
    }
  ];
  return (
    <>
    <Wellcome/>
    <PhotoGrid title="Meet the Multi-Disciplinary Team" grid_props={...grid_props}/>
    </>
  );
}
