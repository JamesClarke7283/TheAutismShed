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
    <div class="px-4 py-8 mx-auto bg-[#eeebe6]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h2 class="text-4xl font-bold" style={{ color: "#6b625f" }}>{title}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid_props.map((grid) => (
            <div class="p-4">
              <h3
                id={grid.title.toLowerCase()}
                class="text-2xl"
                style={{ color: "#6b625f" }}
              >
                <a href={grid.url}>{grid.title}</a>
              </h3>
              <img
                src={grid.img}
                aria-hidden="true"
                width="307"
                height="307"
                alt={grid.title}
              >
              </img>
              <p class="mt-4">
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
