import React from 'react';
import capitalize from '../../utils/capitalize';

export default ({item}) => {
    const {first, last} = item.name;
    const properName = `${capitalize(first)} ${capitalize(last)}`;
    const {medium} = item.picture;
    const {recipecomment } = item;

    return (
      <div style={styles.container}>
        <img
          style={styles.img}
          src={medium}
          alt='userpic'
        />
        <div>
          <p>
            <i>19/12/18 </i>
            <br />
            <b>{properName}</b>
            <br/> {recipecomment}
          </p>
        </div>
      </div>
    )
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
