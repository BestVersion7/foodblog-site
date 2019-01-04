import React, {useState, useEffect} from 'react';

export default () => {
  const [quote, setQuote] = useState('Happy');
  const [loading, setLoading] = useState(true);

  const fetchApi = async() => {
    const response = await fetch(`[link]`);
    const data = await response.json();
    console.log(data);
    //const obj = data.quote
    //setQuote(data)
    setQuote(obj)
    setLoading(false);
  }

  useEffect(() => {fetchApi()},[])

  return (
    <div>
      {loading ? <p> Loading... </p> :
      <p> {quote} </p>}
    </div>
  )
}
