import React, { useState, SyntheticEvent } from "react";
import { ThemeProvider } from "@material-ui/styles";
import ActionBar from "./components/ActionBar/ActionBar";
import TodoList from "./components/TodoList/TodoList";
import TodoDialog from "./components/TodoDialog/TodoDialog";
import { Todo } from "./interfaces/Todos";
import appConst from "./constants/App";
import { createNewTodo, updateTodoList, addNewTodoToList, toggleTodoInList } from "./utils/todoUtils";
import theme from "./theme";
import "./App.scss";

const initialTodo = { id: "", content: "", done: false };

const App = () => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [todoBeingEdit, setTodoBeingEdit] = useState<Todo>(initialTodo);
	const dialogTitle = todoBeingEdit.id ? appConst.EDIT_TODO_DIALOG_TITLE : appConst.ADD_TODO_DIALOG_TITLE;
	const handleToggleDone = (id: string) => {
		const updatedTodoList = toggleTodoInList(todoList, id);
		setTodoList(updatedTodoList);
	};

	const handleOpenDialog = (todo = initialTodo) => {
		handleCloseDialog();
		setTodoBeingEdit(todo);
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	const handleSaveTodo = (todo: Todo) => {
		const updatedTodoList = todo.id
			? updateTodoList(todoList, todo)
			: addNewTodoToList(todoList, createNewTodo(todo.content));
		setTodoList(updatedTodoList);
		handleCloseDialog();
	};

	const handleTodoChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const content = event.currentTarget.value;
		setTodoBeingEdit({ ...todoBeingEdit, content });
	};

	const handleDeleteTodo = (id: string) => {
		setTodoList([...todoList.filter((todo) => todo.id !== id)]);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<header>
					<h1> To-Do App</h1>
				</header>
				<ActionBar onAddTodo={handleOpenDialog} />
				<TodoList
					todoList={todoList}
					onToggle={handleToggleDone}
					onEdit={handleOpenDialog}
					onDelete={handleDeleteTodo}
				/>
				<TodoDialog
					open={isDialogOpen}
					onClose={handleCloseDialog}
					onChange={handleTodoChange}
					onSave={handleSaveTodo}
					todo={todoBeingEdit}
					title={dialogTitle}
					cancelButton={appConst.DIALOG_CANCEL_BUTTON}
					okButton={appConst.DIALOG_OK_BUTTON}
				/>
			</div>
		</ThemeProvider>
	);
};

export default App;
