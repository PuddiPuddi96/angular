import { AfterViewInit, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  
  //Signal
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //since 17.3

  add = output<{title: string, text: string}>();

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});

    //this.form?.nativeElement.reset();

    //Signal
    this.form().nativeElement.reset();
  }

}
