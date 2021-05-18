export class Question {
	questionId: number;
	questionNumber: number;
	questionText: string;
	questionValue: number;
	questionAnswer: string;
	questionHint: string;

	constructor () {
		this.questionId = -1;
		this.questionNumber = 0;
		this.questionText = "";
		this.questionValue = 0;
		this.questionAnswer = "";
		this.questionHint = "";
	}
}
