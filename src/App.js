import React, { Component } from 'react';
import surveyQuestions from './api/surveyQuestions';
import Survey from './components/Survey';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      actionsNeeded: [],
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    this.setState({
      question: surveyQuestions[0].question,
      answerOptions: surveyQuestions[0].answers
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < surveyQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answer: answer,
      actionsNeeded: state.actionsNeeded.concat(surveyQuestions[state.questionId-1].answers[answer].action)
    }));
  }

  setNextQuestion() {
    const questionId = surveyQuestions[this.state.questionId-1].answers[this.state.answer].next;

    this.setState({
      questionId: questionId,
      question: surveyQuestions[questionId-1].question,
      answerOptions: surveyQuestions[questionId-1].answers,
      answer: ''
    });
  }

  getResults() {
    return this.state.actionsNeeded;
  }

  setResults(result) {
    this.setState({ result: result });
  }

  renderSurvey() {
    return (
      <Survey
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={surveyQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result actionsNeeded={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Compliance Questionnaire</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderSurvey()}
      </div>
    );
  }
}

export default App;
