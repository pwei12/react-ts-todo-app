import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import ActionBar from "./components/ActionBar/ActionBar";
import theme from "../src/theme";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
	const [todoList, setTodoList] = useState<string[]>([]);

	const handleAddTodo = (todo: string) => {
		const updatedTodoList = [...todoList, todo];
		setTodoList(updatedTodoList);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<header>
					<h1> To-Do App</h1>
				</header>

				<ActionBar onAddTodo={handleAddTodo} />

				<TodoList todoList={todoList} />
			</div>
		</ThemeProvider>
	);
};

export default App;
