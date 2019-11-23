import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ScreenComponent } from './components/screen/screen.component';
import { TimerComponent } from './components/timer/timer.component';
import { SanitizierPipe } from './shared/pipes/sanitizier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScreenComponent,
    TimerComponent,
    SanitizierPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
