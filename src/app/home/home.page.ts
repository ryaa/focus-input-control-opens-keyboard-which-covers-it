import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

// COMPONENTS
import { TimeEntryEditComponent } from '../time-entry-edit/time-entry-edit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {
  }

  public async presentTestModal(): Promise<void> {

    const timeEntryEditDialogComponent = await this.modalController.create({
      component: TimeEntryEditComponent,
      componentProps: { }
    });
    timeEntryEditDialogComponent.onDidDismiss()
      .then(async (overlayEventDetail) => {
      });
    timeEntryEditDialogComponent.present();
  }
}
