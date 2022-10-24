import styled from '@emotion/styled';
import { useTodoStore } from '../store';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  return (
    <ListWrapper>
      <h1>TodoList</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            addTodo={addTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TodoList;
