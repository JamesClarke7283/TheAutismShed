type AccreditationItem = {
  img: string;
  alt: string;
  url: string;
};

type AccreditationsProps = {
  accreditations_props: AccreditationItem[];
};

export default function Accreditations(
  { accreditations_props }: AccreditationsProps,
) {
  return (
    <>
      <hr class="border-2 my-4 border-primary opacity-30" />
      <div class="w-full flex items-center justify-center">
        {accreditations_props.map((accreditation) => (
          <a
            href={accreditation.url}
            target="_blank"
            className={`w-1/${accreditations_props.length} w-[13rem] px-4`}
          >
            <img
              src={accreditation.img}
              alt={accreditation.alt}
            />
          </a>
        ))}
      </div>
    </>
  );
}
