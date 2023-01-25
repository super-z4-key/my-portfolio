import Head from "next/head";
import AboutMePage from "../components/PagesComponents/AboutMe-Page/AboutMePage";
import ContactsPage from "../components/PagesComponents/Contact-page/ContactsPage";
import HomePage from "../components/PagesComponents/Home-Page/HomePage";
import SkillsPage from "../components/PagesComponents/Skill-Page/skillsPage";
const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <ContactsPage />
      </main>
    </>
  );
};
export default Home;
