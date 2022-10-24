import styled from '@emotion/styled';
import { Todo } from '../store';

interface Props {
  todo: Todo;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, addTodo, removeTodo, toggleTodo }: Props) => {
  const { id, title, isDone } = todo;

  return (
    <ItemWrapper>
      <div>{title}</div>
      <input
        id={id.toString()}
        type='checkbox'
        checked={isDone}
        onChange={e => toggleTodo(Number(e.target.id))}
      />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export default TodoItem;
