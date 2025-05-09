import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, OnDestroy, AfterViewInit, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnDestroy, AfterViewInit {

 mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    @Inject(MediaMatcher) media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() { }
}
