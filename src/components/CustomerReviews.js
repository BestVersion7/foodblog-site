import React, {useState, useEffect} from 'react';
import capitalize from '../utils/capitalize';
import {recipecomments} from '../utils/recipecomments';

export default () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=40&seed=fullstackio`);
    const data = await response.json();
    const obj = data.results;
    setUser(obj);
    setLoading(false);
  }
  //has to be self-invoking asynchronous
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {loading ? <p>...loading</p> :
        <>
          RandomUserAPI <br />
          Comments: <br /><br />
          {user.map((item,i) => {
            const {first, last} = item.name;
            const properName = `${capitalize(first)} ${capitalize(last)}`;
            const {medium} = item.picture;
            const comment = recipecomments[Math.floor(Math.random()*10)];

            return (
              <div key={i} style={styles.container}>
                <img style={styles.img} src={medium} alt='userpic'/>
                <div>
                  <p> <i>19/12/18</i> <br /> <b>{properName}</b> <br/> {comment} </p>
                </div>
              </div>
            )
          })}
        </>
      }
    </>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplate: 'auto/ auto 1fr',
    gridColumnGap: '1.5%',
  },
  img: {
    borderRadius: '3em',
    border: 'solid black'
  }
}
