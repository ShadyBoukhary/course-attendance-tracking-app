import { Directive, TemplateRef, ViewContainerRef, NgZone } from '@angular/core';

// One time binding
@Directive({
  selector: '[one-time]' // Attribute selector
})
export class OneTimeDirective {

  constructor(template: TemplateRef<any>, container: ViewContainerRef, zone: NgZone) {
    zone.runOutsideAngular(() => {
      const view = container.createEmbeddedView(template);
      setTimeout(() => view.detach());
  })
  }

}
