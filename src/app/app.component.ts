import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var callSLider: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'biye-bazaar';

  ngOnInit(): void {
    setTimeout(() => {
      callSLider();
    }, 0);
  }
}
