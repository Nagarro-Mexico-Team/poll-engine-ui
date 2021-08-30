import { Question } from "./question";

export class Poll {
	pollId: number;
	title: string;
	creationDate: string;
	clientName: string;
	dueDate: string;
	status: number;
	questions: Question[];

	constructor() {
		this.pollId = 0;
		this.title = "";
		this.creationDate = "";
		this.clientName = "";
		this.dueDate = "";
		this.status = 0;
		this.questions = [];
	}
}
