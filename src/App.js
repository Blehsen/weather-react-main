import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Lagos" />

				<footer>
					This project was coded by{" "}
					<a href="#" >
						Bless
					</a>
				</footer>
			</div>
		</div>
	);
}
