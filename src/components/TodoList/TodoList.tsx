import React from "react";
import PlainCard from "../Card/PlainCard";
import TodoItem from "../TodoItem/TodoItem";
import { todoListStyles } from "../../styles/MuiStyles";
import { Todo } from "../../interfaces/Todos";
import appConst from "../../constants/App";

type TodoListProps = {
	todoList: Todo[];
	onToggle: (s: string) => void;
	onEdit: (todo: Todo) => void;
};

const TodoList = ({ todoList, onToggle, onEdit }: TodoListProps) => {
	const classes = todoListStyles();

	return (
		<div className={classes.todoList}>
			{todoList.length === 0 ? (
				<PlainCard content={appConst.EMPTY_TODO_LIST_MESSAGE} />
			) : (
				todoList.map((todo, index) => <TodoItem key={index} todo={todo} onToggle={onToggle} onEdit={onEdit} />)
			)}
		</div>
	);
};

export default TodoList;
