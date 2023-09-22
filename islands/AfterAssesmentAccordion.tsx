import { h } from "preact";
import { useState } from "preact/hooks";

const AfterAssesment = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div class="flex flex-wrap bg-white">
      {/* Labels */}
      <div class="w-full p-4 mx-4 flex justify-center mt-4 mb-4">
        <input
          type="radio"
          id="after-assessment"
          name="accordion"
          class="hidden"
          onClick={() => setSelected("afterAssessment")}
        />
        <label
          htmlFor="after-assessment"
          class="text-center text-xl font-medium cursor-pointer border border-primary p-3"
        >
          After Assessment
        </label>
      </div>

      {/* Content */}
      {selected === "afterAssessment" && (
        <div class="w-full flex flex-wrap py-16 mx-4">
          <div class="w-full text-center">
            <h2 class="w-full text-left text-4xl leading-normal">
              Bespoke School Liaison Packages
            </h2>
          </div>
          <div class="w-full text-center mt-8">
            <div class="flex flex-wrap justify-center">
              <div class="w-1/3 text-center">
                <h4 class="text-lg"></h4>
              </div>
            </div>
          </div>
          <p>
            Here at the autism shed we do not believe that autism is something
            to be treated but sadly when it is not understood and the autistic
            persons context is not suitable autism can become traumatic. We have
            expertise in this area and we are here to help – either with 1:1
            psychotherapy or training and education for your family, school or
            workplace.
          </p>
        </div>
      )}
    </div>
  );
};

export default AfterAssesment;
