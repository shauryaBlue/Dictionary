import React from "react";
import { Navbar, WordDetails, WordList } from "./Components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<WordList />
			<WordDetails />
		</div>
	);
}

export default App;
