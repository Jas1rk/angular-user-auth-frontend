import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
  @Input() label: string = 'Click';
  @Input() type: 'button'|'submit'|'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() colorClass : string  = 'bg-violet-700 text-white hover:bg-violet-800'

  @Output() clicked = new EventEmitter<void>()
}
