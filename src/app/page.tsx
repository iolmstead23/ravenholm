import Contact from "./components/contact";
import FAQ from "./components/faq";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/flames.gif')] flex flex-col md:flex-row justify-end">
        <Contact />
      </div>
      
      <Testimonial />
      <FAQ />
    </main>
  )
}
