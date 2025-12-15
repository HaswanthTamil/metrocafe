import Hero from "@/components/Hero";
import Signatures from "@/components/Signatures";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import LoungeExperience from "@/components/LoungeExperience";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-5xl">
        <Hero />
        <Signatures />
        <About />
        <MenuPreview />
        <LoungeExperience />
        <Reviews />
        <Visit />
        <Menu />
      </main>
    </div>
  );
}
