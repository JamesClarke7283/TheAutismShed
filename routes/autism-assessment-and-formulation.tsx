import ImageCard from "../components/ImageCard.tsx";
import AssessmentForm from "../components/AssesmentForm.tsx";
export default function AutismAssesment() {
  return (
    <>
      <ImageCard
        title="Assessment, Formulation and Diagnosis from 8-80"
        img="./images/caring-for-children.webp"
      />
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-8">
          <div class="hidden md:block text-center mb-6">
          </div>
          <div class="text-left mb-6">
            <h2 class="text-2xl">Request for Assessment</h2>
          </div>
          <div class="text-left">
            <p>
              The team here at the autism shed know from lived experience that
              coming for diagnosis can be a confusing, disorienting and
              upsetting time. The process can also be uplifting, freeing and
              empowering. We are here with the experience, expertise and empathy
              to make the process as positive as possible.
            </p>
            <p>
              The British Psychological Society Guidelines (2021) advise that
              assessment, formulation and diagnosis are carried out using gold
              standard measures by a multi-disciplinary team.
            </p>
          </div>
        </div>

        <AssessmentForm />
      </div>
    </>
  );
}
