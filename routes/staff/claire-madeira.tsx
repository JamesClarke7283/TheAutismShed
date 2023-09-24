import StaffBlurb from "../../components/StaffBlurb.tsx";
export default function ClaireMadeira() {
  const props = {
    text:
      "I am an East Kent-based Highly Specialist Speech and Language Therapist and have over 25 years experience. As a parent of now grown-up children with specific learning needs I have a unique understanding of what is involved in ‘sitting on the other side of the table’. I’m passionate about supporting and advocating for children to maximise their ability to access education, demonstrate their learning and reach their speech, language and communication potential.",
    img: "/images/staff/clairem.webp",
    alt: "Claire Madeira",
  };
  return (
    <div class="flex flex-wrap bg-white mx-10">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold">Claire Madeira</h2>
      </div>

      <StaffBlurb {...props} />

      <div class="w-1/2 flex flex-col items-center justify-center">
        <div class="text-left w-full">
          <p>
            I strongly value collaborative working and partnership between
            speech and language therapy, any other involved professionals and
            most importantly those who know the child best; parents, families
            and school staff. This approach enables a full and holistic view of
            a child’s strengths and needs to be shared and understood by all.
            Allowing everyone to jointly identify and prioritise support for a
            child together can lead to the best possible outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
