import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  audio : HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
  }

  ngOnInit() {
  }

  playAudio(fileName){
    const lang = localStorage.getItem('lang');
    this.audio.src = `../../assets/audio/${lang}/numeros/${fileName}.mp3`;
    this.audio.load();
    this.audio.play();
  }

}
