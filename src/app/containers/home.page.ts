import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import * as fromRoot from '../reducers'
import * as FlexFuelActions from '../actions/flexfuel.actions'
import { FlexFuelDevice, BluetoothDevice } from '../models/devices'

import { AddPageComponent } from './add.page'
import { ViewPageComponent } from './view.page'

@Component({
    selector: 'page-home',
    templateUrl: '../templates/home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
    public flexFuelDevices: Observable<FlexFuelDevice[]>
    public bluetoothDevices: Observable<BluetoothDevice[]>
    private connecting: Observable<boolean>
    private connected: Observable<boolean>

    constructor(
        private nav: NavController,
        private store: Store<fromRoot.State>) {
        this.bluetoothDevices = store.select(fromRoot.getBluetoothDevices)
        this.flexFuelDevices = store.select(fromRoot.getFlexFuelDevices)
        this.connecting = store.select(fromRoot.getFlexFuelDeviceConnecting)
        this.connected = store.select(fromRoot.getFlexFuelDeviceConnected)
    }

    setup(device: BluetoothDevice) {
        // maybe add this to an state object too?
        this.nav.push(AddPageComponent, { device })
    }

    connect(device: FlexFuelDevice) {
        this.nav.push(ViewPageComponent, { device })
    }

    remove(device: FlexFuelDevice) {
        this.store.dispatch(new FlexFuelActions.DeleteFlexFuelDeviceAction(device))
    }
}