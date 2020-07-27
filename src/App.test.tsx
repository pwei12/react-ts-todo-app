import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title of to-do app', () => {
  render(<App />);
  const header = screen.getByText(/to-do app/i);
  expect(header).toBeInTheDocument();
});

test('renders to-do item added', () => {
  render(<App />);
  const textInput = screen.getByPlaceholderText("Add to-do");
  const buttonAdd = screen.getByTestId("button-add");
  const todoText = 'hello';
  
  fireEvent.change(textInput, { target: { value: todoText } });
  fireEvent.click(buttonAdd);
  const todoItemAdded = screen.getByText(todoText);
  expect(todoItemAdded).toBeInTheDocument();
});

test('renders message when todo list is empty', () => {
  render(<App />);
  const message = screen.getByText(/you don't have any to-do item/i);
  expect(message).toBeInTheDocument();
});
