import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import styled from 'styled-components';
import {PageProps} from './types';
import {RootState} from '../../reducers';
import * as actions from '../../actions';

const mapStateToProps = (state: RootState) => ({
  personList: state.persons.personList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadPersons: () => dispatch(actions.loadPersons()),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  PageProps;

const Container = styled.div`
  font-family: sans-serif;
  width: 600px;
`;

// const Paragraph = styled.p<{color: string}>`
//   color: ${({color}) => color};
// `;

function App(props: Props) {
  const {loadPersons, personList} = props;
  if (personList.length === 0) loadPersons();

  console.log(personList);

  return <Container>Hello</Container>;
}

App.defaultProps = {
  personList: [],
  loadPersons: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
