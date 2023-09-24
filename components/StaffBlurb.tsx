type Props = {
  text: string;
  img: string;
  alt: string;
};

export default function StaffBlurb({ text, img, alt }: Props) {
  return (
    <div class="w-1/2 flex flex-col items-center justify-center">
      <div class="text-left w-full">
        <p class="flex items-start">
          <img
            class="w-48 h-48 border-4 border-[#6b625f] mr-4"
            src={img}
            alt={alt}
          />
          {text}
        </p>
      </div>
    </div>
  );
}
