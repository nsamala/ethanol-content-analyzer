import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Modal, NavController } from 'ionic-angular'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/rx'

@Component({
  selector: 'page-add',
  templateUrl: '../templates/add.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPageComponent {
}