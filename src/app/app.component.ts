import {Component, OnInit} from '@angular/core';
import {ServService} from './serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public serv: ServService) {
  }

  showTable = false;
  displayTime: string;
  description: string;

  sound = new Audio('assets/sound.mp3');

  ngOnInit(): void {
    this.getTime();
    this.updateTime();
    this.getActualDescription();
  }

  getActualDescription(): void {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    if (hours === 9) {
      this.description = this.serv.entries[0].description;
    }

    if (hours === 10) {
      if (minutes <= 30) {
        this.description = this.serv.entries[1].description;
      } else if (minutes <= 45) {
        this.description = this.serv.entries[2].description;
      } else if (minutes > 45) {
        this.description = this.serv.entries[3].description;
      }
    }

    if (hours === 11) {
      if (minutes > 45) {
        this.description = this.serv.entries[4].description;
      } else if (minutes <= 45) {
        this.description = this.serv.entries[3].description;
      }
    }

    if (hours === 13) {
      if (minutes <= 30) {
        this.description = this.serv.entries[5].description;
      } else if (minutes > 30) {
        this.description = this.serv.entries[6].description;
      }
    }

    if (hours === 14) {
      if (minutes <= 15) {
        this.description = this.serv.entries[7].description;
      } else if (minutes > 15) {
        this.description = this.serv.entries[8].description;
      }
    }

    if (hours === 15) {
      if (minutes <= 15) {
        this.description = this.serv.entries[8].description;
      } else if (minutes >= 30) {
        this.description = this.serv.entries[10].description;
      } else if (minutes > 15) {
        this.description = this.serv.entries[9].description;
      }
    }

    if (hours === 16) {
      if (minutes <= 30) {
        this.description = this.serv.entries[11].description;
      } else if (minutes <= 45) {
        this.description = this.serv.entries[12].description;
      } else if (minutes > 45) {
        this.description = this.serv.entries[13].description;
      }
    }

    if (hours === 17) {
      if (minutes <= 15) {
        this.description = this.serv.entries[13].description;
      }
    }

    if (hours > 17) {
      this.description = 'Feierabend!';
    }
  }


  addLeadingZero(num: number): string {
    return num < 10 ? '0' + num.toString() : num.toString();
  }

  updateTime(): void {
    setInterval(() => {
      this.getTime();
      if (this.displayTime === '10:00' ||
        this.displayTime === '10:00' ||
        this.displayTime === '10:30' ||
        this.displayTime === '10:45' ||
        this.displayTime === '11:45' ||
        this.displayTime === '13:00' ||
        this.displayTime === '13:30' ||
        this.displayTime === '14:00' ||
        this.displayTime === '14:15' ||
        this.displayTime === '15:30' ||
        this.displayTime === '16:00' ||
        this.displayTime === '16:30' ||
        this.displayTime === '16:45' ||
        this.displayTime === '10:59' ||
        this.displayTime === '11:00' ||
        this.displayTime === '17:15') {
        this.sound.play().then();
        setInterval(() => {
          this.sound.pause();
        }, 1000);
      }
    }, 2000);
  }

  getTime(): void {
    const hours = this.addLeadingZero(new Date().getHours());
    const minutes = this.addLeadingZero(new Date().getMinutes());
    this.displayTime = hours + ':' + minutes;
  }
}
