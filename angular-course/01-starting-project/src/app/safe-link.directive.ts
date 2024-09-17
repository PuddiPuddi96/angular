import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active!')
  }

  queyParam = input('myapp');
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?')

    if(wantsToLeave){
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queyParam();
      return;
    }

    event.preventDefault();
  }
}
