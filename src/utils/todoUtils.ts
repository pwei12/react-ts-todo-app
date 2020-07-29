import { v4 as uuidv4 } from "uuid";
import { Todo } from "../interfaces/Todos";

export const createNewTodo = (content: string) => {
	return {
		id: uuidv4(),
		content,
		done: false,
	};
};

export const addNewTodoToList = (todoList: Todo[], newTodo: Todo) => {
    return [...todoList, newTodo];
}

export const updateTodoList = (todoList: Todo[], updatedTodo: Todo) => {
    return todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo;
        }
        return todo;
    });
}

export const toggleTodoInList = (todoList: Todo[], id: string) => {
    return todoList.map((todo) => {
        if (todo.id === id) {
            return {...todo, done: !todo.done};
        }
        return todo;
    });
}

export const countCompleted = (todoList: Todo[]) => {
    return todoList.reduce((count, todo) => todo.done ? ++count : count, 0);
}

export const countUncompleted = (todoList: Todo[]) => {
    return todoList.reduce((count, todo) => todo.done ? count : ++count, 0);
}