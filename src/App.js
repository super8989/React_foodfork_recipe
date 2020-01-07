import React, { Component } from "react";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<Router>
				<main>
					{/* navbar */}
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/recipes' component={Recipes} />
						<Route path='/recipes/:id' component={SingleRecipe} />
						<Route component={Default} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
