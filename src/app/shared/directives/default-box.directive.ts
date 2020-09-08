import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDefaultBox]'
})
export class DefaultBoxDirective implements OnInit {
  private nativeElement: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.nativeElement = this.elementRef.nativeElement;
    this.changeBackgroundColor();
    this.roundEdges();
  }

  changeBackgroundColor(): void {
    const property: string = 'background-color';
    const color: string = '#F2F2F2';
    this.renderer.setStyle(this.nativeElement, property, color);
  }

  roundEdges(): void {
    const property: string = 'border-radius';
    const value: string = '5px';
    this.renderer.setStyle(this.nativeElement, property, value);
  }
}
