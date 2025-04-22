import { Component, signal } from '@angular/core';
import { ReactionPickerComponent } from '../../components/reaction-picker/reaction-picker.component';

@Component({
  selector: 'app-home',
  imports: [
    ReactionPickerComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reactions = signal<string[]>(['😠', '😐', '😊']);
}
