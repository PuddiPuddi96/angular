import { Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked')
  // }
  
  label = input.required<string>()
  //reference to some element that's rendered to the page
  //By injecting it into a component like this, Angular will give you access to the host element of that component
  private element = inject(ElementRef)

  // @ContentChild('input') private control?: ElementRef<
  // HTMLInputElement | HTMLTextAreaElement>

  private control = 
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Clicked')
    console.log(this.element);
    console.log(this.control());
  }
}
