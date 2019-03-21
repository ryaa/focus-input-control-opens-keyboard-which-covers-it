import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'time-entry-edit.html',
  styleUrls: ['./time-entry-edit.scss']
})
export class TimeEntryEditComponent implements OnInit {

  public form: FormGroup;
  public submitAttempt = false;

  public times: Array<{ duration: number, durationAsText: string }>;
  public title: string;

  public tasksLookUp: [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.times = null;
    this.title = null;

  }

  public ngOnInit(): void {

    this.times = Array<{ duration: number, durationAsText: string }>();
    const maxTime = 60 * 60 * 24;
    const step = 600; // 600 sec or 10 mins
    let currentTime = step;
    while (currentTime <= maxTime) {
      const _hours = Math.floor(currentTime / (60 * 60));
      const _minutes = (currentTime - (_hours * 60 * 60)) / 60;
      const formattedTime = _hours + ':' + (_minutes > 9 ? _minutes : '0' + _minutes);
      this.times.push({ duration: currentTime, durationAsText: formattedTime });
      currentTime += step;
    }

    const agent: any = null;
    const date: string = null;
    const taskId: number = null;
    const duration: number = null;
    const billable: boolean = null;
    const note: string = null;

    this.title = 'TEST';

    this.form = this.formBuilder.group({
      test1: [null],
      test2: [null],
      test3: [null],
      agent_id: [agent],
      date: [date],
      task_id: [taskId],
      duration: [duration],
      billable: [billable],
      note: [note]
    });

  }

  public save(): void {
  }

  public cancel(): void {
  }

}
