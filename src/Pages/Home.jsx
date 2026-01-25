import Hero from "../components/Hero";
// import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
// import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import AboutSection from "../components/About";
// import Testimonials from "../components/Testimonials";
// import Faq from "../components/Faq";
// import Download from "../components/Download";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      {/* <BookCar /> */}
      <ChooseUs />
      <PickCar />
      <PlanTrip />
      {/* <Banner /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Download /> */}

      {/* TODO: Add embeded map on contact section*/}
      <Contact />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;
