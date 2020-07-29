import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";
import { ThemeProvider } from "@material-ui/styles";
import ActionBar from "./components/ActionBar/ActionBar";
import TodoList from "./components/TodoList/TodoList";
import TodoDialog from "./components/TodoDialog/TodoDialog";
import MessageDialog from "./components/MessageDialog/MessageDialog";
import StatusBar from "./components/StatusBar/StatusBar";
import { Todo } from "./interfaces/Todos";
import appConst from "./constants/App";
import {
	createNewTodo,
	updateTodoList,
	addNewTodoToList,
	toggleTodoInList,
	removeCompletedTodo,
	countCompleted,
	countUncompleted,
	filterTodosByOption,
	bulkDeleteByFilter,
	getDeleteMessageByFilter,
	checkIsDeletable
} from "./utils/todoUtils";
import theme from "./theme";
import "./App.scss";

const initialTodo = { id: "", content: "", done: false };
const initialCount = { total: 0, completed: 0, uncompleted: 0 };

const App = () => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [todoBeingEdit, setTodoBeingEdit] = useState<Todo>(initialTodo);
	const [dialogTitle, setDialogTitle] = useState(appConst.ADD_TODO_DIALOG_TITLE);
	const [count, setCount] = useState(initialCount);
	const [filterBy, setFilterBy] = useState(appConst.FILTER_OPTIONS.ALL);
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

	useEffect(() => {
		setDialogTitle(todoBeingEdit.id ? appConst.EDIT_TODO_DIALOG_TITLE : appConst.ADD_TODO_DIALOG_TITLE);
	}, [todoBeingEdit.id]);

	useEffect(() => {
		setCount({
			total: todoList.length,
			completed: countCompleted(todoList),
			uncompleted: countUncompleted(todoList),
		});
	}, [todoList]);

	useEffect(() => {
		const filteredTodos = filterTodosByOption(todoList, filterBy);
		setFilteredTodos(filteredTodos);
	}, [filterBy, todoList]);

	const handleToggleDone = (id: string) => {
		const updatedTodoList = toggleTodoInList(todoList, id);
		setTodoList(updatedTodoList);
	};

	const handleOpenEditDialog = (todo = initialTodo) => {
		setTodoBeingEdit(todo);
		setIsEditDialogOpen(true);
	};

	const handleCloseEditDialog = () => {
		setIsEditDialogOpen(false);
	};

	const handleSaveTodo = (todo: Todo) => {
		const updatedTodoList = todo.id
			? updateTodoList(todoList, todo)
			: addNewTodoToList(todoList, createNewTodo(todo.content));
		setTodoList(updatedTodoList);
		handleCloseEditDialog();
	};

	const handleTodoChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const content = event.currentTarget.value;
		setTodoBeingEdit({ ...todoBeingEdit, content });
	};

	const handleDeleteTodo = (id: string) => {
		const updatedTodoList = removeCompletedTodo(todoList, id);
		setTodoList(updatedTodoList);
	};

	const handleFilterChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
		const selected = event.target.value;
		setFilterBy(selected as string);
	}

	const handleOpenDeleteDialog = () => {
		setIsDeleteDialogOpen(true);
	}

	const handleCloseDeleteDialog = (toDelete: boolean) => {
		if (toDelete) {
			const updatedTodoList = bulkDeleteByFilter(todoList, filterBy);
			setTodoList(updatedTodoList);
		} 
		setIsDeleteDialogOpen(false);
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<header>
					<h1> To-Do App</h1>
				</header>
				<ActionBar
					onAddTodo={handleOpenEditDialog}
					onDeleteAll={handleOpenDeleteDialog}
					filterValue={filterBy}
					onFilterChange={handleFilterChange}
					isDeletable={checkIsDeletable(todoList, filterBy)}
				/>
				<StatusBar
					total={count.total}
					completed={count.completed}
					uncompleted={count.uncompleted}
				/>
				<TodoList
					todoList={filteredTodos}
					onToggle={handleToggleDone}
					onEdit={handleOpenEditDialog}
					onDelete={handleDeleteTodo}
					filterValue={filterBy}
				/>
				<TodoDialog
					open={isEditDialogOpen}
					onClose={handleCloseEditDialog}
					onChange={handleTodoChange}
					onSave={handleSaveTodo}
					todo={todoBeingEdit}
					title={dialogTitle}
					cancelButton={appConst.DIALOG_CANCEL_BUTTON}
					okButton={appConst.DIALOG_OK_BUTTON}
				/>
				<MessageDialog
					open={isDeleteDialogOpen}
					onClose={handleCloseDeleteDialog}
					title={appConst.DELETE_ALL_DIALOG_TITLE}
					message={getDeleteMessageByFilter(filterBy)}
					cancelButton={appConst.DIALOG_CANCEL_BUTTON}
					okButton={appConst.DIALOG_OK_BUTTON}
				/>
			</div>
		</ThemeProvider>
	);
};

export default App;
