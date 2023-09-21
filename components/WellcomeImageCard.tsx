export default function WelcomeImageCard() {
  const title = "Welcome to The Autism Shed";
  const img = "./images/mobile-kids.webp";

  return (
    <div className="relative border-4 border-[#6b625f] bg-[#f9f3ee] mx-10 h-[20rem]">
      <div className="absolute right-0 top-0 bottom-0 z-0 flex items-center justify-end">
        <img
          src={img}
          className="object-scale-down h-full w-auto"
          alt="Background"
        />
      </div>
      <div className="relative flex items-center justify-center h-full z-10 px-28 py-28">
        <h1 className="text-center text-4xl text-[#6b625f]">
          {title}
        </h1>
      </div>
    </div>
  );
}
