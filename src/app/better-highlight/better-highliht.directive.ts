import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighliht]',
})
export class BetterHighlihtDirective implements OnInit {
  @HostBinding('style.backgroundColor') nameBackgroundColor: string =
    'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.nameBackgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.nameBackgroundColor = 'transparent';
  }
}
