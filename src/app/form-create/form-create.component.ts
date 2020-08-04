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
  subTotal: number;
  impBolsas: number;
  descuento: number;
  total: number;
  igv: number;

  constructor(private formBuilder: FormBuilder) {
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
    this.subTotal = 0;
    this.descuento = 0;
    this.impBolsas = 0;
    this.total = 0;
    this.igv = 0;
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      bienServicio: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      unidad: ['', Validators.required],
      codigo: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      impuestoBolsas: ['', Validators.required],
      precioUnidad: ['', [Validators.required, Validators.min(0)]],
      descuento: ['', [Validators.required, Validators.min(0)]],
      igv: ['', Validators.required],
    });

    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }
  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const Data = this.form.value;

      this.subTotal = this.subTotal + Data.cantidad * Data.precioUnidad;

      const DescuentoTemp =
        (Data.cantidad * Data.precioUnidad * Data.descuento) / 100;
      this.descuento = this.descuento + DescuentoTemp;

      const IgvTemp = (Data.cantidad * Data.precioUnidad * 18) / 100;

      this.igv = this.igv + IgvTemp;

      console.log(this.igv);

      if (Data.impuestoBolsas === 'si') {
        const ImpBolsasTemp = (Data.cantidad * Data.precioUnidad * 5) / 100;
        this.impBolsas = this.impBolsas + ImpBolsasTemp;
      }
      const DataTemp = {
        ...Data,
        precioTotal: Data.cantidad * Data.precioUnidad,
      };
      this.total =
        this.total + this.subTotal + this.impBolsas + this.igv - this.descuento;
      console.log(this.total);
      this.products.push(DataTemp);
    } else {
      console.log('complete todos los campos!');
      this.form.markAllAsTouched();
    }
  }
}
