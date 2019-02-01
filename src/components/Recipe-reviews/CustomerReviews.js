import React, {useState, useEffect} from 'react';
import CustomerReviewsLayout from './CustomerReviewsLayout';
import CustomerReviewsForm from './CustomerReviewsForm';
import {RecipeComments} from './RecipeComments';
import anonpic from '../../assets/anon.png'

export default () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const AddComment = addItem => {

    //This changes the array and appends the information while keeping original
    const newComment = [
      {
        "name": {
          "first":'Anonymous',
          "last":""
        },
        "picture": {
          'medium': anonpic
        },
        'recipecomment': addItem,
        'dob': {
          'date': new Date().toLocaleString()
        }
      },...user
    ]
    setUser(newComment)
  }

  const fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=10&seed=fullstackio`);
    const data = await response.json();
    const obj = data.results;

    //Append Comments to api
    //Adds item.recipeComment to loop
    obj.map((item, index) => item.recipecomment = RecipeComments[index])

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
        <div>
          <h4> Comments: </h4>
          <CustomerReviewsForm
            AddComment = {AddComment}
          /> <br />

          {user.map((item,index) => (
            <CustomerReviewsLayout
              item = {item}
              key = {index}
            />
          ))}
        </div>
      }
    </>
  );
}
