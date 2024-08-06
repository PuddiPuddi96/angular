import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent], //to declare and register all the components that need to work together
  bootstrap: [AppComponent] //Root component
})
export class AppModule {

}