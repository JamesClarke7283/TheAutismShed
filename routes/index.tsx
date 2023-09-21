import PhotoGrid from "../components/PhotoGrid.tsx";
import WellcomeImageCard from "../components/WellcomeImageCard.tsx";
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
      <WellcomeImageCard />
      <div class="text-center px-4 py-8 mx-10">
        <h2 class="my-4">
          The team here at the autism shed know from lived experience that
          coming for diagnosis can be a confusing, disorienting and upsetting
          time. The process can also be uplifting, freeing and empowering. We
          are here with the experience, expertise and empathy to make the
          process as positive as possible.
        </h2>
        <p class="my-4">
          The British Psychological Society Guidelines (2021) advise that
          assessment, formulation and diagnosis are carried out using gold
          standard measures by a multi-disciplinary team.
        </p>
      </div>
      <PhotoGrid
        title="Meet the Multi-Disciplinary Team"
        grid_props={grid_props}
      />
      <OurPhilosophy />
    </>
  );
}
