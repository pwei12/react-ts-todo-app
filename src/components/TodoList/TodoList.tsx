import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { todoListStyles } from "../../styles/MuiStyles";
import { Todo } from "../../interfaces/Todos";

type TodoListProps = {
	todoList: Todo[];
	handleToggleDone: (s: string) => void
};

const EMPTY_TODO_LIST_MESSAGE = "You Don't Have Any To-Do Item";
const EMPTY_CARD = { id: '', content: EMPTY_TODO_LIST_MESSAGE, done: false }

const TodoList = ({ todoList, handleToggleDone }: TodoListProps) => {
	const classes = todoListStyles();

	return (
		<div className={classes.todoList}>
			{todoList.length === 0 ? (
				<TodoItem todo={EMPTY_CARD} handleToggleDone={() => { }} />
			) : (
					todoList.map((todo, index) => <TodoItem key={index} todo={todo} handleToggleDone={handleToggleDone} />)
			)}
		</div>
	);
};

export default TodoList;
