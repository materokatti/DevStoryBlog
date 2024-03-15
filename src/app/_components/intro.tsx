import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="flex flex-start text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <img
          className="inline-block size-[3rem]"
          src="/favicon/logo.png"
          alt="Devstory logo"
        />
        DevStory
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 space-x-1">
        <a
          href="https://www.linkedin.com/in/doyun-hwang-397855214/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          <img
            src="/favicon/linkedin.png"
            alt="linkedin"
            className="size-[1.5rem] inline-block"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCNF2FGsT3y6Xvbqv_9KJ0pA"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          <img
            src="/favicon/youtube.png"
            alt="youtube"
            className="size-[1.5rem] inline-block"
          />
        </a>
        <a
          href="https://github.com/materokatti"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          <img
            src="/favicon/github.png"
            alt="github"
            className="size-[1.5rem] inline-block"
          />
        </a>
      </h4>
    </section>
  );
}
