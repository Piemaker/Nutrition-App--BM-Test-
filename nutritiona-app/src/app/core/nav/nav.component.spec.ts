import { ErrorModule } from './../../pages/error/error.module';
import { DetailsModule } from './../../pages/details/details.module';
import { FormModule } from './../../pages/form/form.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';

describe('NavComponent', () => {
  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => FormModule },
    { path: 'details', loadChildren: () => DetailsModule },
    { path: 'error', loadChildren: () => ErrorModule },
    { path: '**', redirectTo: 'error' },
  ];
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let de: DebugElement;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have home link / details link', () => {
    expect(
      de
        .queryAll(By.css('.nav a'))
        .map((x) => x.nativeElement.innerText.toLowerCase().trim())
    ).toEqual(component.links);
  });
  it('should set activeLink to the current set url', fakeAsync(() => {
    router.navigate(['home/details']);
    tick();
    expect(component.activeLink).toEqual('details');
  }));

  it('should resolve wrong urls to error page', fakeAsync(() => {
    router.navigate(['home/details']);
    tick();
    expect(location.path()).toEqual('/error');
  }));

  it('should resolve empty urls to the home page', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toEqual('/home');
  }));
});
