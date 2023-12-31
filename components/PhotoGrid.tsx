type GridItem = {
  title: string;
  img: string;
  tags: string[];
  url: string;
};

type GridProps = {
  title: string;
  grid_props: GridItem[];
};

export default function PhotoGrid({ title, grid_props }: GridProps) {
  return (
    <div class="mt-8 px-4 py-8 mx-auto bg-[#eeebe6] mx-10">
      <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h2 class="text-4xl font-bold mb-8" style={{ color: "#6b625f" }}>
          {title}
        </h2>

        <div class="grid grid-cols-3 gap-4 w-full">
          {grid_props.map((grid) => (
            <div class="p-4 text-center bg-white border-4 border-primary flex flex-col items-center justify-center">
              <div class="mb-auto flex flex-col items-center justify-center">
                <a aria-label={grid.title} href={grid.url}>
                  <img
                    src={grid.img}
                    aria-hidden="true"
                    alt={grid.title}
                    class="rounded border-4 border-primary w-48 h-auto mb-4"
                  >
                  </img>
                </a>
                <h3
                  id={grid.title.toLowerCase()}
                  class="text-2xl"
                  style={{ color: "#6b625f" }}
                >
                  <a aria-label={grid.title} href={grid.url}>{grid.title}</a>
                </h3>
              </div>
              <p class="mt-4 text-left">
                {grid.tags.map((tag) => (
                  <>
                    {tag}
                    <br />
                  </>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
