import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
	public messages: Array<Message>;
	constructor(private chatService:ChatService) {
		this.messages = new Array<Message>();
	}

	public gererNouveauMessage(message: Message): void {
		console.log('Nouveau message recu !');
		this.messages = this.chatService.addMessage(message);
	}

	public ngOnInit(): void {
		this.chatService.getMessages().subscribe(
		(messages) => this.messages = messages,
		(error) => console.log(error)
		);
	}
}

