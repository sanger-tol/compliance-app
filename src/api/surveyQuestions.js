var quizQuestions = [
  {
      // Question 1
      question: "Question 1: What is your first answer?",
      answers: [
          {
              content: "Answer 1",
              action: "Action for Q1.1 <a href=\"https://google.com\">Google</a>",
              next: 3
          },
          {
              content: "Answer 2",
              action: "Action for Q1.2",
              next: 2
          },
          {
              content: "Answer 3",
              action: "Action for Q1.3",
              next: 2
          }
      ]
  },
  {
      question: "Question 2: What is your second answer?",
      answers: [
          {
              content: "One",
              action: "Action for Q2.1",
              next: 4
          },
          {
              content: "Two",
              next: 3
          },
          {
              content: "Three",
              action: "Action for Q2.3",
              next: 3
          }
      ]
  },
  {
      question: "Question 3: Third?",
      answers: [
          {
              content: "Six",
              next: 5
          },
          {
              content: "Seven",
              action: "Action for Q3.2",
              next: 4
          },
          {
              content: "Eight",
              next: 4
          }
      ]
  },
  {
      question: "Question 4: What shall we do now?",
      answers: [
          {
              content: "This",
              action: "Action for Q4.1",
              next: 5
          },
          {
              content: "That",
              next: 5
          },
          {
              content: "Something else",
              next: 5
          }
      ]
  },
  {
      question: "Question 5: Is this the last question?",
      answers: [
          {
              content: "Yes",
              action: "Action for Q5.1",
          },
          {
              content: "No"
          },
          {
              content: "Maybe"
          }
      ]
  }
];

export default quizQuestions;
