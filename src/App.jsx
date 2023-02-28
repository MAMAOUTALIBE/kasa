import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components//Footer";
import About from "./components/AppartementGrid"

function App() {
	return (
		<div className="App">
			<Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      
      </Routes>
			<Footer />
		</div>
	);
}

export default App;