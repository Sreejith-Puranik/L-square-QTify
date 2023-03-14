import { React } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { fetchtopsongs, newalbums } from "./Api/Api";

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
    </>
  );
}

export default App;
//rfce, rafc
