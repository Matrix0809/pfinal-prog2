import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaInventarioPage } from './lista-inventario.page';

describe('ListaInventarioPage', () => {
  let component: ListaInventarioPage;
  let fixture: ComponentFixture<ListaInventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
