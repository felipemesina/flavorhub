import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiEndpoint =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=25&ingredients=";

class SearchBar extends Component {
  state = {
    answer: "",
    image: "",
    recipes: []
  };

  searchStr = React.createRef();

  handleSubmit = async e => {
    e.preventDefault();
    const searchStr = this.searchStr.current.value;
    const { data: recipes } = await axios.get(apiEndpoint + searchStr, {
      headers: {
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "d114573550msheb130e22907eac6p17c427jsnc9caa5a826a4"
      }
    });
    this.setState({ recipes });
  };

  renderSearchInput(label) {
    return (
      <div className="input-group input-group-lg">
        <form onSubmit={this.handleSubmit} className="searchInput">
          <h1 className="searchHeader">Find it Make it Love it</h1>

          <input
            ref={this.searchStr}
            placeholder={label}
            type="text"
            className="form-control"
            style={{ borderRadius: "20px" }}
            aria-label="Search"
          />
        </form>
      </div>
    );
  }

  renderResults(recipes) {
    if (recipes) {
      return (
        <div className="card-deck">
          {recipes.map(recipe => (
            <div className="card" style={{ width: "18rem" }} key={recipe.id}>
              <img className="card-img-top" src={recipe.image} alt="" />
              <div className="card-body text-center">
                <Link to={`/recipes/${recipe.id}`} className="recipeTitle">
                  {recipe.title}
                </Link>
                <span
                  style={{
                    display: "block",
                    fontSize: "80%",
                    color: "#878787"
                  }}
                >
                  {recipe.likes}
                  <i
                    className="fas fa-heart mx-1"
                    style={{ color: "#ff8370" }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="wrapper">
        {this.renderSearchInput("Search...")}
        {this.renderResults(recipes)}
      </div>
    );
  }
}

export default SearchBar;
