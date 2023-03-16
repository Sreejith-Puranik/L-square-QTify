import { React } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { fetchtopsongs, newalbums } from "./Api/Api";
import Songs from "./components/Songs/Songs";
import Faqs from "./components/Faqs/Faqs";

// import Topalbums from "./components/Topalbums/Topalbums";

function App() {
  // useEffect(() => {
  //   fetchtopsongs().then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Banner />
      {/* <Topalbums /> */}
      <Section title="Top Albums" datasource={fetchtopsongs} />
      <Section title="New Albums" datasource={newalbums} />
      <Songs title="Songs" />
      <Faqs title="FAQs" />
    </>
  );
}

export default App;
//rfce, rafc
