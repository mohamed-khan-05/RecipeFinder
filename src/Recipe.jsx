import React from "react";

const Recipe = ({ title, image, ingredients, youtube }) => {
  return (
    <div className="recipe">
      <img className="image" src={image} alt={title} />
      <div className="details">
        <h1>{title}</h1>
        <div>
          <h3>Ingredients & Measurements:</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {youtube && (
            <p>
              <strong>Watch on YouTube: </strong>
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                {youtube}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
