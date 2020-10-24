import React from "react";

import RecipeImageCards from "../components/HomepageRecipeCards/RecipeImageCards";
import BookImageCards from "../components/BookCardsApi/BookImageCards";
import HomeTrendingRecipes from "../components/HomeTrendingRecipes";
export default () => {
    return (
        <>
            <div style={{ margin: "0 2.5%" }}>
                <p>
                    <i>Last update: 23 October 2020</i>
                </p>
                <p>
                    {" "}
                    These are static images (Check my Heroku site for dynamic
                    images stored on Cloudinary CDN :{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://goldenwine.herokuapp.com"
                        title="goldenwine"
                    > goldenwine.herokuapp.com </a>
                </p>
                <HomeTrendingRecipes />
                <RecipeImageCards />
                <BookImageCards />
            </div>
        </>
    );
};
