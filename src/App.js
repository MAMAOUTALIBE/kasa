import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import FicheLogement from "./pages/FicheLogement/FicheLogement"
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error"
import Footer from "./components/Footer/Footer";


function App() {
	return (
		
		<BrowserRouter>
		
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
		
		</BrowserRouter>
	);
}

export default App;
