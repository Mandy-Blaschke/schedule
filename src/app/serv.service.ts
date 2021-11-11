import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() {
  }

  entries: Entry[] = [
    {
      start: '09:00',
      end: '10:00',
      description: 'Übersicht, Strukturierung, Lernplan, Wiederholung',
    },
    {
      start: '10:00',
      end: '10:30',
      description: 'Inhalte erarbeiten und Lernen vorbereiten',
    },
    {
      start: '10:30',
      end: '10:45',
      description: 'Pause',
    },
    {
      start: '10:45',
      end: '11:45',
      description: 'Inhalte erarbeiten und Lernen vorbereiten',
    },
    {
      start: '11:45',
      end: '13:00',
      description: 'Pause',
    },
    {
      start: '13:00',
      end: '13:30',
      description: 'Wiederholung Vortag',
    },
    {
      start: '13:30',
      end: '14:00',
      description: 'Wiederholung aktueller Tag',
    },
    {
      start: '14:00',
      end: '14:15',
      description: 'Pause',
    },
    {
      start: '14:15',
      end: '15:15',
      description: 'Inhalte erarbeiten und Lernen vorbereiten',
    },
    {
      start: '15:15',
      end: '15:30',
      description: 'Pause',
    },
    {
      start: '15:30',
      end: '16:00',
      description: 'Online Übung Vortag',
    },
    {
      start: '16:00',
      end: '16:30',
      description: 'Online Übung aktueller Tag',
    },
    {
      start: '16:30',
      end: '16:45',
      description: 'Pause',
    },
    {
      start: '16:45',
      end: '17:15',
      description: 'Wiederholung aktueller Tag komplett',
    },
  ];

}

interface Entry {
  start: string;
  end: string;
  description: string;
}
