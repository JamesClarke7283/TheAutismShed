import Wellcome from "../components/Wellcome.tsx";
import PhotoGrid from "../components/PhotoGrid.tsx";
import OurPhilosophy from "../components/OurPhilosophy.tsx";

export default function Home() {
  const grid_props = [
    {
      title: "Georgie Bainbridge",
      img: "./images/staff/georgieb-1.webp",
      tags: [
        "Director",
        "Chartered Psychologist",
        "DCPsych CPsychol BPS",
        "HCPC Registered",
        "Psychotherapist UKCP",
        "Relational Doctoral Research Supervisor",
      ],
      url: "/staff/georgie-bainbridge",
    },
    {
      title: "Claire Madeira",
      img: "./images/staff/clairem.webp",
      tags: [
        "Lead Paediatric Autism",
        "Highly Specialist Speech and Language Consultant",
      ],
      url: "/staff/claire-madeira",
    },
    {
      title: "Jim Sharman",
      img: "./images/staff/placeholder-headshot.webp",
      tags: ["Autism Specialist Mentor", "Inclusion Consultant"],
      url: "/staff/jim-sharman",
    },
    {
      title: "Carrie Overton",
      img: "./images/staff/carrieo.webp",
      tags: ["Neurodiversity Coach", "SEN", "Education Consultant"],
      url: "/staff/carrie-overton",
    },
  ];
  return (
    <>
      <Wellcome />
      <PhotoGrid
        title="Meet the Multi-Disciplinary Team"
        grid_props={grid_props}
      />
      <OurPhilosophy />
    </>
  );
}
