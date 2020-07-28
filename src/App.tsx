import React, { useState, SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@material-ui/styles";
import ActionBar from "./components/ActionBar/ActionBar";
import TodoList from "./components/TodoList/TodoList";
import TodoDialog from "./components/TodoDialog/TodoDialog";
import { Todo } from "./interfaces/Todos";
import appConst from "./constants/App";
import theme from "./theme";
import "./App.scss";

const App = () => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [todoBeingEdit, setTodoBeingEdit] = useState<Todo>({id: '', content: '', done: false});

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
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}
			return todo;
		});
		setTodoList(updatedTodoList);
	};

	const handleOpenDialog = (todo: Todo) => {
		handleCloseDialog();
		setTodoBeingEdit(todo);
		setIsDialogOpen(true);
	};
	
	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	const handleSaveTodo = () => {
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === todoBeingEdit.id) {
				todo = {...todo, content: todoBeingEdit.content};
			}
			return todo;
		});
		setTodoList(updatedTodoList);
		handleCloseDialog();
	}

	const handleTodoChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const content = event.currentTarget.value;
		setTodoBeingEdit({...todoBeingEdit, content});
	};

	const handleDeleteTodo = (id: string) => {
		setTodoList([...todoList.filter(todo => todo.id !== id)]);
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<header>
					<h1> To-Do App</h1>
				</header>
				<ActionBar onAddTodo={handleAddTodo} />
				<TodoList todoList={todoList} onToggle={handleToggleDone} onEdit={handleOpenDialog} onDelete={handleDeleteTodo} />
				<TodoDialog
					open={isDialogOpen}
					onClose={handleCloseDialog}
					onChange={handleTodoChange}
					onSave={handleSaveTodo}
					todo={todoBeingEdit}
					title={appConst.EDIT_DIALOG_TITLE}
					cancelButton={appConst.EDIT_DIALOG_CANCEL_BUTTON}
					okButton={appConst.EDIT_DIALOG_OK_BUTTON}
				/>
			</div>
		</ThemeProvider>
	);
};

export default App;
