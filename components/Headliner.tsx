import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import { JSX } from "preact";

type HeadlinerProps = {
  title: string;
  body: JSX.Element;
};

export default function Headliner(headliner_props: HeadlinerProps) {
  return (
    <div class="px-4 py-8 mx-10 bg-[#eeebe6]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold" style="color:#6b625f">
          {headliner_props.title}
        </h1>
        {headliner_props.body}
      </div>
    </div>
  );
}
