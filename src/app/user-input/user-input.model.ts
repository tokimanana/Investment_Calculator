import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserInputComponent],
  exports: [UserInputComponent],
  imports: [FormsModule, CommonModule],
})

export class UserInputModule {

}
