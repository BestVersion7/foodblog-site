import React, { useState, useEffect } from "react";

export default () => {
  const [searchinput, setInput] = useState(null);
  const [loading, setLoading] = useState("true");
  //api call default link to that
  const apicall = async (x = "beef") => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`
    );
    const data = await response.json();
    const items = data.meals;
    if (items !== null) {
      setInput(items);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  //change input value to modify api route
  function handleChange(e) {
    apicall(e.target.value);
  }

  return (
    <>
      <br />
      <input
        style={styles.inputbox}
        onChange={handleChange}
        placeholder="Search here (e.g. salmon)"
      />
      <div style={{'color':'purple', 'fontWeight':'bold'}}> Top 25 Results: </div>
      <>
        {loading ? (
          <p> Loading... </p>
        ) : (
          <>
            {searchinput.map((item, i) => {
              const { strMeal, strMealThumb, strSource } = item;
              return (
                <div style={styles.container} key={i}>
                  <h4> {strMeal} </h4>
                  <img style={styles.img} src={strMealThumb} alt={strMeal} />
                  <a style={styles.link} href={strSource}>Link to meal </a>
                </div>
              );
            })}
          </>
        )}
      </>
    </>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplate: " auto auto auto/ auto",
    borderBottom: "solid red"
  },
  inputbox: {
    width: '100%',
    maxWidth: '15em'
  },
  img: {
    width: "100%",
    maxWidth: "15em"
  },
  link: {
    fontWeight: 'bold'
  }
};
