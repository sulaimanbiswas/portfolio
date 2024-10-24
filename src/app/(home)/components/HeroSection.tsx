import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 flex flex-col items-start justify-center gap-4 md:col-span-1">
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold text-transparent sm:text-2xl">
            Hello, I&apos;m
          </p>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            Md Suliman
          </p>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-lg text-transparent sm:text-2xl">
            Front-end Web Developer
          </p>
          <div className="flex gap-4">
            <Button className="relative inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#ffffff,45%,#d4e4f0,55%,#ffffff)] bg-[length:200%_100%] px-6 font-medium text-slate-950 transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-400">
              Hire me
              <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </Button>
            <Button className="relative inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#ffffff,45%,#d4e4f0,55%,#ffffff)] bg-[length:200%_100%] px-6 font-medium text-slate-950 transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-400">
              Resume
              <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
