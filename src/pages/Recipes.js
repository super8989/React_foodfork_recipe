import React, { Component } from "react";

import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

class Recipes extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		recipes: recipeData,
		search: ""
	};

	render() {
		return (
			<>
				<Search />
				<RecipeList />
			</>
		);
	}
}

export default Recipes;
