import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { todoListStyles } from "../../styles/MuiStyles";

type TodoListProps = {
	todoList: string[]
};
const EMPTY_TODO_LIST_MESSAGE = "You Don't Have Any To-Do Item";

const TodoList = ({ todoList }: TodoListProps) => {
	const classes = todoListStyles();

	return (
		<div className={classes.todoList}>
			{todoList.length === 0 ? (
				<TodoItem content={EMPTY_TODO_LIST_MESSAGE} />
			) : (
				todoList.map((todo, index) => (
					<TodoItem key={index} content={todo} />
				))
			)}
		</div>
	);
};

export default TodoList;
