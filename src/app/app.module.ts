import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([{ path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) }]),
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
