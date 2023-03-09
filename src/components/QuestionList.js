import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  }
  function onUpdatedItem(updatedItem) {
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {items.map((item) => {
          return <QuestionItem key={item.id} question={item} onDeleteItem={handleDeleteItem} onUpdatedItem={onUpdatedItem}/>
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
