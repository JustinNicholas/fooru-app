import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';

function* fetchRecipes() {
    try {
        console.log('in the try');
        const response = yield axios.get('/api/recipes')
        yield put({type: 'SET_RECIPES', payload: response.data})
    } catch {
        console.log('error in get recipes', error);
    }
}

function* recipeSaga(){
    yield takeLatest('GET_RECIPES', fetchRecipes);
}

export default recipeSaga
