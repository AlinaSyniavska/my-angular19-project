import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-reaction-picker',
  imports: [],
  standalone: true,
  templateUrl: './reaction-picker.component.html',
  styleUrl: './reaction-picker.component.css'
})
export class ReactionPickerComponent {
  reactions = input<string[]>([]);

  selectedReaction = linkedSignal<string[], string | null>({
    source: () => this.reactions(),
    computation: (source, previous) => {
      return source.find(r => previous?.value === r) || null;
    }
  });

  protected isSelected(reaction: string) {
    return this.selectedReaction() === reaction;
  }
}
