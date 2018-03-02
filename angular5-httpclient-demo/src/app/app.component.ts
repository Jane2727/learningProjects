import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public towers;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getTowers();
  }

  getTowers() {
    this._demoService.getTowers().subscribe(
      // the first argument is a function which runs on success
      data => { this.towers = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('Towers')
    );
  }
}