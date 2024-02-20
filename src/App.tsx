import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchElements } from './store/reducers/ActionCreators';
import Container from './components/Container';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchElements());
  }, []);

  const { error, isLoading, elements } = useAppSelector(
    (state) => state.elementReducer
  );

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : elements ? (
        <Container />
      ) : (
        <h1>Elements not found</h1>
      )}
    </div>
  );
}

export default App;
