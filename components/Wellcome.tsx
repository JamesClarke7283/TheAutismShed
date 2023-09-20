import Headliner from "./Headliner.tsx";

export default function Wellcome() {
  const props = {
    title: "Welcome to The Autism Shed",
    body: <>
    <h2 class="my-4">
    The team here at the autism shed know from lived experience that coming for diagnosis can be a confusing, disorienting and upsetting time. The process can also be uplifting, freeing and empowering. We are here with the experience, expertise and empathy to make the process as positive as possible.
    </h2>
    <p class="my-4">
    The British Psychological Society Guidelines (2021) advise that assessment, formulation and diagnosis are carried out using gold standard measures by a multi-disciplinary team.
    </p>
    </>
  }

  return (
    <>
    <Headliner {...props}/>
    </>
  );
}
