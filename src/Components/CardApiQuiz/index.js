// src/Components/CardQuiz/index.js
import React, { useEffect, useState } from 'react';
import { fetchQuestion } from '../../Controller/QuizController';
import { CardContainer, Title, Option, Content, Button, OptionContainer, FeedbackText } from './styles';

const CardQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const getQuestion = async () => {
    const data = await fetchQuestion();
    setQuestion(data);
    setLoading(false);
    setSelectedOption(null);
    setSubmitted(false);
    setCorrect(false);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  if (loading) {
    return <CardContainer>Loading...</CardContainer>;
  }

  if (!question) {
    return <CardContainer>Error loading question</CardContainer>;
  }

  const handleOptionClick = (option) => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (submitted) return;

    setSubmitted(true);
    setCorrect(selectedOption === question.correctAnswer);
  };

  return (
    <CardContainer>
      <Title>Api DevQuiz</Title>
      <Content>{question.question}</Content>
      <OptionContainer>
        <Option
          selected={selectedOption === 'a'}
          feedback={submitted && (selectedOption === 'a' ? (question.correctAnswer === 'a' ? 'correct' : 'incorrect') : null)}
          onClick={() => handleOptionClick('a')}
        >
          {question.optionA}
        </Option>
        <Option
          selected={selectedOption === 'b'}
          feedback={submitted && (selectedOption === 'b' ? (question.correctAnswer === 'b' ? 'correct' : 'incorrect') : null)}
          onClick={() => handleOptionClick('b')}
        >
          {question.optionB}
        </Option>
        <Option
          selected={selectedOption === 'c'}
          feedback={submitted && (selectedOption === 'c' ? (question.correctAnswer === 'c' ? 'correct' : 'incorrect') : null)}
          onClick={() => handleOptionClick('c')}
        >
          {question.optionC}
        </Option>
        <Option
          selected={selectedOption === 'd'}
          feedback={submitted && (selectedOption === 'd' ? (question.correctAnswer === 'd' ? 'correct' : 'incorrect') : null)}
          onClick={() => handleOptionClick('d')}
        >
          {question.optionD}
        </Option>
        <Option
          selected={selectedOption === 'e'}
          feedback={submitted && (selectedOption === 'e' ? (question.correctAnswer === 'e' ? 'correct' : 'incorrect') : null)}
          onClick={() => handleOptionClick('e')}
        >
          {question.optionE}
        </Option>
      </OptionContainer>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Button onClick={handleSubmit} disabled={submitted} green>Submit</Button>
        <Button onClick={getQuestion} gray>Próxima Questão</Button>
      </div>
      {submitted && !correct && <FeedbackText>Resposta Incorreta</FeedbackText>}
    </CardContainer>
  );
};

export default CardQuiz;
