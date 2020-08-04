import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Product } from '../Product';
@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  products: Product[];
  product: Product[];
  model: any = {};
  form: FormGroup;

  constructor() {
    this.buildForm();
    this.products = [
      {
        bienServicio: 'bien',
        description: 'esto es una papa',
        precioUnidad: 10,
        descuento: 0,
        cantidad: 2,
        impuestoBolsas: 'no',
        igv: 'exonerado',
        codigo: 102002,
        unidad: 'caja',
      },
    ];
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = new FormGroup({
      bienServicio: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      unidad: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.maxLength(360)]),
      impuestoBolsas: new FormControl('', [Validators.required]),
      precioUnidad: new FormControl('', [Validators.required]),
      descuento: new FormControl('', [Validators.required]),
      igv: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
  handleSubmit(event: Event): void {
    event.preventDefault();
    const DataTemp = this.form.value;
    let Data;
    if (DataTemp.descuento > 0) {
      const descuento =
        (DataTemp.cantidad * DataTemp.precioUnidad * DataTemp.descuento) / 100;
      const totalPago = DataTemp.cantidad * DataTemp.precioUnidad;
      Data = {
        ...DataTemp,
        precioTotal: totalPago - descuento,
      };
    } else {
      const descuento = DataTemp.cantidad * DataTemp.precioUnidad;
      Data = {
        ...DataTemp,
        precioTotal: descuento,
      };
    }

    this.products.push(Data);
    // console.log(Data);
  }
}
