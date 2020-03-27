import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarInventarioPage } from './modificar-inventario.page';

describe('ModificarInventarioPage', () => {
  let component: ModificarInventarioPage;
  let fixture: ComponentFixture<ModificarInventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarInventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
