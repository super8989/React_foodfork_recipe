import React, { Component } from "react";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Home />
				<Recipes />
				<SingleRecipe />
				<Default />
			</div>
		);
	}
}

export default App;
