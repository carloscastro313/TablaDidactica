import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  audio : HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
  }

  ngOnInit() {
  }

  playAudio(fileName){
    const lang = localStorage.getItem('lang');
    this.audio.src = `../../assets/audio/${lang}/colores/${fileName}.mp3`;
    this.audio.load();
    this.audio.play();
  }

}
