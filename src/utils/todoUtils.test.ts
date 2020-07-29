import {
    addNewTodoToList,
    updateTodoList,
    toggleTodoInList,
    countCompleted,
    countUncompleted,
    filterTodosByOption,
    checkIsDeletable
} from "./todoUtils";

test('addNewTodoInList should add the given todo object to the given todo array and return new array', () => {
    const latest = addNewTodoToList([], { id: '2', content: "aloha", done: false });
    expect(latest.length).toBe(1);
    expect(latest[0].id).toBe("2");
});

test('updateTodoList should change the content of the given todo object in the given todo array and return new array', () => {
    const latest = updateTodoList([{ id: '2', content: "aloha", done: false }], { id: '2', content: "hey aloha", done: false });
    expect(latest.length).toBe(1);
    expect(latest[0].content).toBe("hey aloha");
});

test('toggleTodoInList should toggle the done-property of the given todo object in the given todo array and return new array', () => {
    const latest = toggleTodoInList([{ id: '2', content: "aloha", done: false }], "2");
    expect(latest.length).toBe(1);
    expect(latest[0].done).toBeTruthy();
});

test('countCompleted should return number of completed todo', () => {
    const completedNumber = countCompleted([{ id: '1', content: "aloha", done: true }, { id: '2', content: "aloha", done: true }]);
    expect(completedNumber).toBe(2);
});

test('countUncompleted should return number of completed todo', () => {
    const uncompletedNumber = countUncompleted([{ id: '1', content: "aloha", done: false }, { id: '2', content: "aloha", done: false }]);
    expect(uncompletedNumber).toBe(2);
});

test('filterTodosBy should return all todos when filter option is "All"', () => {
    const todoList = [{id: "1", content: "first", done: false}, {id: "2", content: "2nd", done: true}]
    const filtered = filterTodosByOption(todoList, "All");
    expect(filtered).toEqual(todoList);
});

test('filterTodosByOption should return completed todos when filter option is "Completed"', () => {
    const todoList = [{id: "1", content: "first", done: false}, {id: "2", content: "2nd", done: true}]
    const filtered = filterTodosByOption(todoList, "Completed");
    expect(filtered).toEqual([todoList[1]]);
});

test('filterTodosByOption should return uncompleted todos when filter option is "Uncompleted"', () => {
    const todoList = [{id: "1", content: "first", done: false}, {id: "2", content: "2nd", done: true}]
    const filtered = filterTodosByOption(todoList, "Uncompleted");
    expect(filtered).toEqual([todoList[0]]);
});

test('checkIsDeletableByFilter should return false when there is no todo item and filter option is "All"', () => {
    const todoList = [];
    const deletable = checkIsDeletable(todoList, "All");
    expect(deletable).toEqual(false);
});

test('checkIsDeletableByFilter should return true when there is at least one todo item and filter option is "All"', () => {
    const todoList = [{ id: "1", content: "first", done: false }];
    const deletable = checkIsDeletable(todoList, "All");
    expect(deletable).toEqual(true);
});

test('checkIsDeletableByFilter should return true when there is completed todo and filter option is "Completed"', () => {
    const todoList = [{ id: "2", content: "2nd", done: true }];
    const deletable = checkIsDeletable(todoList, "Completed");
    expect(deletable).toEqual(true);
});

test('checkIsDeletableByFilter should return false when there is no completed todo and filter option is "Completed"', () => {
    const todoList = [{id: "1", content: "first", done: false}]
    const deletable = checkIsDeletable(todoList, "Completed");
    expect(deletable).toEqual(false);
});

test('checkIsDeletableByFilter should return true when there is uncompleted todo and filter option is "Uncompleted"', () => {
    const todoList = [{ id: "2", content: "2nd", done: false }];
    const deletable = checkIsDeletable(todoList, "Uncompleted");
    expect(deletable).toEqual(true);
});

test('checkIsDeletableByFilter should return false when there is no uncompleted todo and filter option is "Uncompleted"', () => {
    const todoList = [{id: "1", content: "first", done: true}]
    const deletable = checkIsDeletable(todoList, "Uncompleted");
    expect(deletable).toEqual(false);
});