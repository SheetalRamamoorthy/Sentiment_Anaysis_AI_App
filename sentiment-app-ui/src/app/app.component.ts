import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SentimentComponent } from './sentiment/sentiment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SentimentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sentiment-app';
}
