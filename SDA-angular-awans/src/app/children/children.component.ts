import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {}
  @Input() value;
  ngOnChanges(e) {
    console.log('children - ngOnChanges', e);
  }
  ngOnInit() {
    console.log('children - ngOnInit');
  }
  ngDoCheck() {
    console.log('children - ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('children - ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('children - ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('children - ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('children - ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('children - ngOnDestroy');
  }
}