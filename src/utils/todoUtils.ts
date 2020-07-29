import { v4 as uuidv4 } from "uuid";
import { Todo } from "../interfaces/Todos";
import appConst from "../constants/App";

export const createNewTodo = (content: string) => {
	return {
		id: uuidv4(),
		content,
		done: false,
	};
};

export const addNewTodoToList = (todoList: Todo[], newTodo: Todo) => {
	return [...todoList, newTodo];
};

export const updateTodoList = (todoList: Todo[], updatedTodo: Todo) => {
	return todoList.map((todo) => {
		if (todo.id === updatedTodo.id) {
			return updatedTodo;
		}
		return todo;
	});
};

export const toggleTodoInList = (todoList: Todo[], id: string) => {
	return todoList.map((todo) => {
		if (todo.id === id) {
			return { ...todo, done: !todo.done };
		}
		return todo;
	});
};

export const removeCompletedTodo = (todoList: Todo[], id: string) => {
	return todoList.filter((todo) => todo.id !== id);
};

export const countCompleted = (todoList: Todo[]) => {
	return todoList.reduce((count, todo) => (todo.done ? ++count : count), 0);
};

export const countUncompleted = (todoList: Todo[]) => {
	return todoList.reduce((count, todo) => (todo.done ? count : ++count), 0);
};

export const filterCompleted = (todoList: Todo[]) => {
	return todoList.filter((todo) => todo.done);
};

export const filterUncompleted = (todoList: Todo[]) => {
	return todoList.filter((todo) => !todo.done);
};

export const filterTodosBy = (todoList: Todo[], filterOption: string) => {
	switch (filterOption) {
		case appConst.FILTER_OPTIONS.COMPLETED:
			return filterCompleted(todoList);
		case appConst.FILTER_OPTIONS.UNCOMPLETED:
			return filterUncompleted(todoList);
		default:
			return todoList;
	}
};

export const getEmptyTodoMessageByFilter = (filterOption: string) => {
	const filtered = filterOption === appConst.FILTER_OPTIONS.ALL ? "" : filterOption;
	return `You Don't Have Any ${filtered} To-Do Item`;
};

export const bulkDeleteByFilter = (todoList: Todo[], filterOption: string) => {
	if (filterOption === appConst.FILTER_OPTIONS.ALL) return [];
	return filterOption === appConst.FILTER_OPTIONS.COMPLETED ? filterUncompleted(todoList) : filterCompleted(todoList);
};

export const getDeleteMessageByFilter = (filterOption: string) => {
	const filtered = filterOption === appConst.FILTER_OPTIONS.ALL ? "" : filterOption;
	return `Confirm delete ALL ${filtered} To-Do Items?`;
};
