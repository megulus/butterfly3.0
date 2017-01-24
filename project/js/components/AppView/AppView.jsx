import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { setMood } from '../../actions/moodActions';
import { setQuestions } from '../../actions/questionsActions';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoodDisplay from '../MoodDisplay/MoodDisplay';
import QuestionContainer from '../Questions/QuestionContainer';
import Submitted from '../Submitted/Submitted';

import grid from '../../../scss/app.scss';
import style from './AppView.css';

@connect((store) => {
    return {
        moodSet: store.mood.moodSet,
        mood: store.mood.mood,
        submitted: store.submit.submitted,
    }
})

class AppView extends Component {

    componentWillMount() {
        const { query } = this.props.location;
        const { v } = query;
        const initialMood = v ? v : 3;
        this.props.dispatch(setMood(initialMood));
        this.props.dispatch(setQuestions());
    }

    render() {
        const currState  = this.props;
        const mainContent =  currState.submitted
            ?   <Submitted />
            :   <div>
                    <MoodDisplay />
                    <QuestionContainer/>
                </div>;

        return (
            <div className={classNames(grid.containerElement, style.appBackground)} >
                <Header />
                {mainContent}
                <Footer />
            </div>
        );
    }

}

export default AppView
