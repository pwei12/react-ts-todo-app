import React, { useState, SyntheticEvent } from "react";
import ActionBar from './components/ActionBar/ActionBar';
import "./App.scss";

const App = () => {
	const [todoList, setTodoList] = useState<string[]>([]);
  
  const handleAddTodo = (todo: string) => {
    const updatedTodoList = [...todoList, todo];
		setTodoList(updatedTodoList);
  }

	return (
		<div className="app">
			<header>
				<h1> To-Do App</h1>
			</header>

      <ActionBar onAddTodo={handleAddTodo} />

      {todoList.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
		</div>
	);
};

export default App;
