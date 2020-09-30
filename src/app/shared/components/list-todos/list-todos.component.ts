import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from 'src/app/data/models/todo.model';
import { Label } from 'src/app/shared/models/label.model';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  @Input() todos: Todo[];
  @Input() buttonShowMore: boolean;
  @Output() onLoadData: EventEmitter<void> = new EventEmitter<void>();

  getLabel(todo: Todo): Label {
    return {
      backgroundColor: todo.completed ? '#1b8f06' : '#f70505',
      description: todo.completed ? 'Completa' : 'Incompleta',
      descriptionColor: '#FFF'
    }
  }

  onClickShowMore(): void {
    this.onLoadData.emit();
  }
}
