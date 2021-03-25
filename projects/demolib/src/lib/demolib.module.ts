import { NgModule } from '@angular/core';
import { DemolibComponent } from './demolib.component';
import { IrenesheaderModule } from './components/irenesheader/irenesheader.module';
import {IrenesfooterModule} from './components/irenesfooter/irenesfooter.module'



@NgModule({
  declarations: [DemolibComponent],
  imports: [
    IrenesheaderModule, IrenesfooterModule
  ],
  exports: [DemolibComponent]
})
export class DemolibModule { }
