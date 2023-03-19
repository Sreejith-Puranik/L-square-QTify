import { React } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { fetchtopsongs, genre, newalbums, songs } from "./Api/Api";
// import Songs from "./components/Songs/Songs";
import Faqs from "./components/Faqs/Faqs";
import { StyledEngineProvider } from "@mui/material/styles";

// import Topalbums from "./components/Topalbums/Topalbums";

function App() {
  // useEffect(() => {
  //   fetchtopsongs().then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Banner />
        {/* <Topalbums /> */}
        <Section title="Top Albums" datasource={fetchtopsongs} type="album" />
        <Section title="New Albums" datasource={newalbums} type="album" />
        <Section
          title="Songs"
          datasource={songs}
          filtersource={genre}
          type="song"
        />
        {/* <Songs title="Songs" /> */}
        <Faqs title="FAQs" />
      </StyledEngineProvider>
    </>
  );
}

export default App;
//rfce, rafc
