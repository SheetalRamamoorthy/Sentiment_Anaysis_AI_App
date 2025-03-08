import { Component } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { CommonModule, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SentimentResponse{
  label: string;
  score: number;
}

@Component({
  selector: 'app-sentiment',
  imports:[NgIf,CommonModule,FormsModule],
  templateUrl: './sentiment.component.html',
  styleUrl: './sentiment.component.scss',
  standalone: true
})

export class SentimentComponent {
  inputEntry :String = "";
  results :any;
  label:any;
  score:any;

  constructor(private http:HttpClient){}

  analyze(){
    const url = 'http://127.0.0.1:5000/analyze'; 
    this.http.post<SentimentResponse[]>(
      url,
      {text:this.inputEntry}
    ).subscribe((response:SentimentResponse[])=>{
      console.log(response[0])
      this.results = response[0];
      this.label = response[0].score;
      this.score = response[0].label
    })
  }


}
