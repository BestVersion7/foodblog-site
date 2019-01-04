import React, {useState} from 'react'
import TodoListItem from './SearchAPI/TodoListItem'
import TodoInput from './SearchAPI/TodoInput'

export default () => {
  const [listItem, setListItem] = useState(['Cooking','Drinking'])

  //append ItemList
  function handleChange (text) {
    const listItems = [...listItem, text]
    setListItem(listItems)
  }

  //Debugging
  console.log(listItem)

  return (
    <>
      <TodoInput
        AddNewItem = {handleChange}
      />

      {listItem.map((item,index) => (
        <TodoListItem
          key={index}
          item ={item}
        />
      ))}
    </>
  )
}
