import { Component, signal } from '@angular/core';
import { ReactionPickerComponent } from '../../components/reaction-picker/reaction-picker.component';

@Component({
  selector: 'app-home',
  imports: [
    ReactionPickerComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reactions = signal<string[]>(['😠', '😐', '😊']);
}
