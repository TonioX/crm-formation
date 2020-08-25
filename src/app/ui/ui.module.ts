import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { NavComponent } from '../core/components/nav/nav.component';
import { CoreModule } from '../core/core.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports:[
    UiComponent
  ]
})
export class UiModule { }
