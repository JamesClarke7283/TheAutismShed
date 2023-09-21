type Props = {
  title: string;
  img: string;
};

export default function ImageCard({ title, img }: Props) {
  return (
    <div class="relative border-4 border-primary mx-10 h-[20rem]">
      <div class="absolute inset-0 z-0">
        <img
          src={img}
          class="object-cover object-center w-full h-full opacity-50"
          alt="Background"
        />
      </div>
      <div class="relative flex items-center justify-center h-full z-10">
        <h1 class="text-center text-4xl text-[#6b625f] opacity-100">
          {title}
        </h1>
      </div>
    </div>
  );
}
