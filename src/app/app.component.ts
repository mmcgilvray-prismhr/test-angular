import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';

  public testFunc() {
    return "test";
  }

  public aNewFunction() {
    console.log('test123')
    console.log('test123')
    console.log('test123')
    console.log('test123')
    console.log('test123')
    console.log('test123')
    console.log('test123')

  }
}
