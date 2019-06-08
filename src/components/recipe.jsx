import React, { Component } from "react";
import axios from "axios";

const infoEndpoint =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";

class Recipe extends Component {
  state = {
    results: [],
    extendedIng: []
  };

  async componentDidMount() {
    const { data: results } = await axios.get(
      infoEndpoint + this.props.match.params.id + "/information",
      {
        headers: {
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "d114573550msheb130e22907eac6p17c427jsnc9caa5a826a4"
        }
      }
    );
    let extendedIng = results.extendedIngredients.map(item => item.name);
    this.setState({ results, extendedIng });
    console.log(results);
  }

  handleBackButton() {
    return (
      <div className="container backButton">
        <button
          onClick={() => this.props.history.push("/")}
          className="btn btn-sm"
        >
          New Search
        </button>
      </div>
    );
  }

  render() {
    const { results, extendedIng } = this.state;
    return (
      <main className="row recipeWrapper">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <div className="container recipeInstructions">
            <h4 className="recipeTitleInst">{results.title}</h4>
            <div className="recipeImgContainer">
              <img
                className="recipeImg"
                src={results.image}
                alt={results.title}
              />
              <p className="credits text-muted">{results.creditsText}</p>
            </div>
            <section className="instructionsWrapper">
              <div className="timeFrame">
                <span className="readyIn">Ready In:</span>{" "}
                {results.readyInMinutes + " minutes"}
              </div>
              <div className="ingredientWrapper">
                <p className="sectionTitle">Ingredients</p>
                <ul>
                  {extendedIng.map(item => (
                    <li key={item} className="ingredients">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="prepWrapper">
                <p className="sectionTitle">Preparation</p>
                <p className="instructionText">{results.instructions}</p>
              </div>
            </section>
            {this.handleBackButton()}
          </div>
        </div>
        <div className="col-sm-4" />
      </main>
    );
  }
}

export default Recipe;
