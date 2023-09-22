import { h } from "preact";
import { useState } from "preact/hooks";

export default function AssessmentAccordion() {
  const [selected, setSelected] = useState("");

  return (
    <div class="flex flex-wrap">
      <div class="w-full p-4">
        <div class="flex flex-wrap">
          <div class="w-1/3 p-4">
            <input
              type="radio"
              id="circle-1"
              name="accordion"
              class="hidden"
              onClick={() => setSelected("earlyDevelopment")}
            />
            <label
              for="circle-1"
              class="text-center text-xl font-medium cursor-pointer border border-primary p-3"
            >
              Early Development
            </label>
          </div>

          <div class="w-1/3 p-4">
            <input
              type="radio"
              id="circle-2"
              name="accordion"
              class="hidden"
              onClick={() => setSelected("adiR")}
            />
            <label
              for="circle-2"
              class="text-center text-xl font-medium cursor-pointer uppercase border border-primary p-3"
            >
              ADI-R
            </label>
          </div>

          <div class="w-1/3 p-4">
            <input
              type="radio"
              id="circle-3"
              name="accordion"
              class="hidden"
              onClick={() => setSelected("adosii")}
            />
            <label
              for="circle-3"
              class="text-center text-xl font-medium cursor-pointer uppercase border border-primary p-3"
            >
              ADOSII
            </label>
          </div>
        </div>

        <div class="gap-y-8">
          {selected === "earlyDevelopment" && (
            <div class="p-4">
              <div class="text-center text-2xl">
                <h2>Early Development</h2>
              </div>
              <p>
                In order to assess for autism it is important to gather
                information about your early developmental history to help
                inform the assessment process and to assess what other
                professionals may need to be included in the process.
              </p>
            </div>
          )}

          {selected === "adiR" && (
            <div class="p-4">
              <div class="text-center text-2xl uppercase">
                <h2>ADI-R</h2>
              </div>
              <p>
                The ADI-R is a clinical diagnostic instrument for assessing
                autism in children and adults.
              </p>
              <br />

              <p>
                The ADI-R is a revised version of the original ADI and the
                information obtained can be used in a diagnostic assessment
                process to inform the formulation guided by the DSMV (diagnostic
                manual).
              </p>
              <br />

              <p>
                The questionnaire is usually carried out with parents or carers.
              </p>
              <br />
              <p>Other respondents who know you well can get involved.</p>
              <br />
              <p>The questions focus on gathering information about:</p>
              <br />
              <p>
                qualities of reciprocal social interaction; communication and
                language; and restricted and repetitive, stereotyped interests,
                sensory profile and behaviours.
              </p>
              <br />
            </div>
          )}

          {selected === "adosii" && (
            <div class="p-4">
              <div class="text-center text-2xl uppercase">
                <h2>ADOSII</h2>
              </div>
              <div class="text-left">
                <p class="font-semibold">
                  The Autism Diagnostic Observation Schedule-Second Edition
                  ADOSII&nbsp;
                </p>
                <p>
                  is&nbsp;a semi-structured observational assessment, which
                  contains&nbsp;a sequence of task and social activities
                  administered by trained clinicians.&nbsp; The
                  ADOS-2&nbsp;evaluates a person’s communication skills, social
                  interaction, and imaginative use of materials in individuals
                  who are suspected to have autism spectrum disorder
                  (ASD).&nbsp;
                </p>
                <p>The assessment looks at five core areas of skill:</p>
                <ul class="list-disc list-inside">
                  <li>Language and communication</li>
                  <li>Reciprocal interaction</li>
                  <li>Imagination</li>
                  <li>Stereotyped behaviours and interests</li>
                  <li>Other behaviours</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
