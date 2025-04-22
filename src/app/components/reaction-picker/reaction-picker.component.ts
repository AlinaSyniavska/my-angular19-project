import { Component, input } from '@angular/core';

@Component({
  selector: 'app-reaction-picker',
  imports: [],
  templateUrl: './reaction-picker.component.html',
  standalone: true,
  styleUrl: './reaction-picker.component.css'
})
export class ReactionPickerComponent {
  reactions = input();
}
