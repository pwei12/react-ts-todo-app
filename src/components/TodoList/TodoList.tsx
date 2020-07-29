import React from "react";
import PlainCard from "../Card/PlainCard";
import TodoItem from "../TodoItem/TodoItem";
import { todoListStyles } from "../../styles/MuiStyles";
import { Todo } from "../../interfaces/Todos";
import { getEmptyTodoMessageByFilter } from "../../utils/todoUtils";

type TodoListProps = {
	todoList: Todo[];
	onToggle: (s: string) => void;
	onEdit: (todo: Todo) => void;
	onDelete: (id: string) => void;
	filterValue: string;
};

const TodoList = ({ todoList, onToggle, onEdit, onDelete, filterValue }: TodoListProps) => {
	const classes = todoListStyles();
	const emptyTodoMessage = getEmptyTodoMessageByFilter(filterValue);
	return (
		<div className={classes.todoList}>
			{todoList.length === 0 ? (
				<PlainCard content={emptyTodoMessage} />
			) : (
				todoList.map((todo, index) => (
					<TodoItem key={index} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
				))
			)}
		</div>
	);
};

export default TodoList;
