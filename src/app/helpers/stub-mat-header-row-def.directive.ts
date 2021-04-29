import { Directive } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[matHeaderRowDef]'
})
export class StubMatHeaderRowDefDirective {
  @Input() matHeaderRowDefColumns: string[];

  constructor() { }

}
