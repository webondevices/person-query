import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import styled from 'styled-components';
import {PageProps} from './types';
import {RootState, Todo} from '../../reducers';
import * as actions from '../../actions';

const mapStateToProps = (state: RootState) => ({
  todoList: state.todos.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (todo: Todo) => dispatch(actions.addTodo(todo)),
  deleteLastTodo: () => dispatch(actions.deleteLastTodo()),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  PageProps;

const Container = styled.div`
  font-family: sans-serif;
  width: 600px;
`;

const Paragraph = styled.p<{color: string}>`
  color: ${({color}) => color};
`;

function App(props: Props) {
  const {color, todoList, addTodo, deleteLastTodo} = props;
  return (
    <Container>
      <h1>Welcome to React with Typescript</h1>
      <Paragraph color={color}>
        The color of this page is:
        {color}
      </Paragraph>
      <Paragraph color={color}>
        {todoList.map(todo => (
          <span key={todo}>{todo}</span>
        ))}
        <button type="button" id="addButton" onClick={() => addTodo('todo')}>
          Add
        </button>
        <button
          type="button"
          id="deleteButton"
          onClick={() => deleteLastTodo()}
        >
          Remove
        </button>
      </Paragraph>
    </Container>
  );
}

App.defaultProps = {
  todoList: [],
  addTodo: () => {},
  deleteLastTodo: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
