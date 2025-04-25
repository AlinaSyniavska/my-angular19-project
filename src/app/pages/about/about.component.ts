import { Component } from '@angular/core';
import { NB_DIALOG_CONFIG, NbDialogModule, NbDialogService, NbTabsetModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    NbTabsetModule,
    // NbDialogModule.forChild(),
  ],
  providers: [
    NbDialogService,
    {
      provide: NB_DIALOG_CONFIG,
      useValue: {
        hasBackdrop: true,
        closeOnBackdropClick: true,
        hasScroll: false,
        autoFocus: true,
        closeOnEsc: true,
        // Інші опції...
      }
    }
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private dialogService: NbDialogService) {
  }

  onTabChange($event: any) {
    console.log($event);
  }

/*  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }*/

}
