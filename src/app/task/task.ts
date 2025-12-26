import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from './task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskPage implements OnInit {

  tasks: Task[] = [];
  loading = true;
  error = '';

  private taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load tasks';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
