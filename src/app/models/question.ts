export class Question {
	questionNumber: number;
	questionText: string;
	questionValue: number;
	questionAnswer: string;
	questionHint: string;

	constructor () {
		this.questionNumber = 0;
		this.questionText = "";
		this.questionValue = 0;
		this.questionAnswer = "";
		this.questionHint = "";
	}
}
