import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function MyCookBook() {

  useEffect(() => {
    getRecipes();
  }, []);

  const recipes = useSelector(store => store.recipes);
  const dispatch = useDispatch();

  const getRecipes = () => {
    dispatch({
      type: 'GET_RECIPES'
    })
  }

  console.log(recipes);

  return (
    <div className="container">
      <p>My Cook Book</p>
    </div>
  );
}

export default MyCookBook;
