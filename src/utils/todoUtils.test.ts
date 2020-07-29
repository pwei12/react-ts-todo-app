import { addNewTodoToList, updateTodoList, toggleTodoInList } from "./todoUtils";

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