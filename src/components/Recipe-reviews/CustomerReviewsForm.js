import React, {useState} from 'react';

export default ({AddComment}) => {
  const [comment, setComment] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    if(!comment) return;
    AddComment(comment);
    setComment('');
  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <textarea
        value = {comment}
        onChange = {handleChange}
        placeholder = 'Write comment here.'
        className = "testinginput"
      ></textarea>
      <button className = "recipe-input-button"> Submit </button>
    </form>
  );
}
