import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent], //to declare and register all the components that need to work together
  bootstrap: [AppComponent], //Root component
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {

}