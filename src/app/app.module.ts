import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocalInstanceComponent } from './local-instance/local-instance.component';
import { BotSetupComponent } from './bot-setup/bot-setup.component';
import { BotDeployComponent } from './bot-deploy/bot-deploy.component';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { AutoCommandComponent } from './auto-command/auto-command.component';
import { ManCommandComponent } from './man-command/man-command.component';
import { DepCommandComponent } from './dep-command/dep-command.component';
import { ContributeComponent } from './contribute/contribute.component';
import { NewCommandComponent } from './new-command/new-command.component';
import { TroubleComponent } from './trouble/trouble.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LevelscaleComponent } from './levelscale/levelscale.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    LocalInstanceComponent,
    BotSetupComponent,
    BotDeployComponent,
    BotConfigComponent,
    AutoCommandComponent,
    ManCommandComponent,
    DepCommandComponent,
    ContributeComponent,
    NewCommandComponent,
    TroubleComponent,
    PrivacyComponent,
    LevelscaleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
