import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarInventarioPage } from './agregar-inventario.page';

describe('AgregarInventarioPage', () => {
  let component: AgregarInventarioPage;
  let fixture: ComponentFixture<AgregarInventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
