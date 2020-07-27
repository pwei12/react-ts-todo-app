import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import ActionBar from "./components/ActionBar/ActionBar";
import theme from "./theme";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./interfaces/Todos";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	
	const handleAddTodo = (content: string) => {
		const todo = {
			id: uuidv4(),
			content,
			done: false,
		};
		const updatedTodoList = [...todoList, todo];
		setTodoList(updatedTodoList);
	};

	const handleToggleDone = (id: string) => {
		const updatedTodoList = todoList.map(todo => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}
			return todo;
		});
		setTodoList(updatedTodoList);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<header>
					<h1> To-Do App</h1>
				</header>

				<ActionBar onAddTodo={handleAddTodo} />

				<TodoList todoList={todoList} handleToggleDone={handleToggleDone} />
			</div>
		</ThemeProvider>
	);
};

export default App;
