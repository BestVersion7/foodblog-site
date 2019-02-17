import React from 'react';
import Videos from '../components/Videos';

export default() => {
  return (
    <div style={styles.container}>
      <Videos />
    </div>
  )
}

const styles ={
  container: {
    margin: '0 2.5%'
  }
}
