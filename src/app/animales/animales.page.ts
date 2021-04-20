import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  audio : HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
  }

  ngOnInit() {
  }

  playAudio(fileName){
    const lang = localStorage.getItem('lang');
    this.audio.src = `../../assets/audio/${lang}/animales/${fileName}.mp3`;
    this.audio.load();
    this.audio.play();
  }

}
