export class Question {
    constructor(id, question, optionA, optionB, optionC, optionD, optionE, correctAnswer) {
      this.id = id;
      this.question = question;
      this.optionA = optionA;
      this.optionB = optionB;
      this.optionC = optionC;
      this.optionD = optionD;
      this.optionE = optionE;
      this.correctAnswer = correctAnswer;
    }
  }