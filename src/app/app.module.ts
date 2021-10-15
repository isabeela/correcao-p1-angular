import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IsabelawalletComponent } from './isabelawallet/isabelawallet.component';
import { IsabelacurrencyComponent } from './isabelacurrency/isabelacurrency.component';

import { IsabelawalletService } from './isabelawallet.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'currency', component: IsabelacurrencyComponent },
      { path: 'wallet', component: IsabelawalletComponent },
    ]),
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    IsabelawalletComponent,
    IsabelacurrencyComponent,
  ],
  bootstrap: [AppComponent],
  providers: [IsabelawalletService],
})
export class AppModule {}
