import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Joke}from '../joke/joke.component';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
  this.jokeCreated.emit(new Joke(setup, punchline));
  }

  constructor() {}

  ngOnInit(): void {
  }

}
