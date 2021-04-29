import { Input } from '@angular/core';
import { Directive } from '@angular/core';


@Directive({
 selector: '[matRowDef]'
})
export class StubMatRowDefDirective {
  @Input() matRowDefColumns: string[];

  constructor() { }

}
