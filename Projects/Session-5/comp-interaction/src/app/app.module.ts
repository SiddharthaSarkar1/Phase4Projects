import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighlightDirective } from './HighlightDirective';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    RegisterComponent,
    UserComponent,
    ChangeColorDirective,
    HighlightDirective,
    SwitchdemoComponent,
    PipeDemoComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
