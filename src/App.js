import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
// import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

function App() {
  return (
    <>
      {/* //   <BrowserRouter> */}
      {/* //     <Sidebar /> */}
      {/* //     <Routes> */}
      {/* //       <Route element={<MainSection />} path="/" /> */}
      <MainSection />
      {/* //     </Routes> */}
      <Player />
      {/* //   </BrowserRouter> */}
    </>
  );
}
// il browser router non mi permette di visualizzare il lavoro in console, costretta a toglierlo!

export default App;
