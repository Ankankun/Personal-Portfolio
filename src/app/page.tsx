import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import LearningLog from '@/components/learning-log';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Experience />
        <LearningLog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
