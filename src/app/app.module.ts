import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Route
import { AppRoutingModule } from './routes/app-routing.module';
import { GameModule } from './components/pages/games/game.module';

//General
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/sidebar/side-bar.component';

//Services

//Pages
import { routingComponents } from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GameModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
