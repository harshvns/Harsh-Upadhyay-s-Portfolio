import React,{useState} from "react"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import About from "./components/About.jsx"
import Work from "./components/Work.jsx";

const App = () => {
  
  return (
  //   <>
  //     <CustomCursor/>
  //     <Navbar/>
  //     {/* <Page1/>
  //     <Page2/>
  //     <Page3/> */}
  //   </>
    <Router>
      <CustomCursor/>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </Router>
  )
}

export default App


// import React, { useState } from "react";
// import CustomCursor from "./components/CustomCursor";
// import Navbar from "./components/Navbar";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";
// import Menu from "./components/Menu";

// const App = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div>
//       <CustomCursor />
//       <Navbar setShowMenu={setShowMenu} />
//       {!showMenu && (
//         <>
//           <Page1 />
//           <Page2 />
//           <Page3 />
//         </>
//       )}
//       {showMenu && <Menu />}
//     </div>
//   );
// };

// export default App;
