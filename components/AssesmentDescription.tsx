import AssesmentAccordion from "../islands/AssesmentAccordion.tsx";
import AfterAssesmentAccordion from "../islands/AfterAssesmentAccordion.tsx";
export default function AssesmentDescription() {
  return (
    <div class="bg-[#eeebe6]">
      <div class="flex flex-wrap">
        <div class="w-1/2 p-4">
          <div class="text-center">
            <h2 class="text-2xl font-bold">Assessment</h2>
            <p class="w-full md:w-4/5 lg:w-11/12 mx-auto">
              The team at ‘the shed’ take a humanistic, relational approach to
              the formulation and diagnosis of autism. Holding the tension of
              this apparent contradiction, labelling while seeing a person as
              fully as possible, is part of the work and education that we do at
              the shed. Our work with autistic people includes assessment,
              psychotherapy, coaching, and advocacy in schools and the
              workplace.
            </p>
          </div>
        </div>

        <div class="w-1/2 p-4">
          <div class="w-full aspect-w-16 aspect-h-10">
            <img
              class="object-cover border-4 border-primary"
              alt="thoughtful-retired-elderly-man"
              src="./images/thoughtful-retired-elderly-man-looking-up-picture.webp"
            />
          </div>
        </div>
      </div>
      <AssesmentAccordion />
      <AfterAssesmentAccordion />
    </div>
  );
}
