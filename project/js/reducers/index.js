import { combineReducers } from 'redux';

import moodReducer from './moodReducer';
import questionsReducer from './questionsReducer';
import submissionReducer from './submissionReducer';


export default combineReducers({
    mood: moodReducer,
    questions: questionsReducer,
    submit: submissionReducer,
});


