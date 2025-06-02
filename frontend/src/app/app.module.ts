import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, InicioComponent, ContactoComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    { path: '', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent }
  ])],
  bootstrap: [AppComponent]
})
export class AppModule { }
