import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing';
import { ContactService } from './contact/contact.service';

describe('AppComponent', () => {

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers:[
        ContactService
      ]
    }).compileComponents();
  }));

  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
