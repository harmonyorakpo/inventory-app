import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stockItemsForm!: FormGroup;
  subtmitted = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.stockItemsForm = this.formbuilder.group({
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  controlIsError(controlName: string): boolean | undefined {
    return (
      (this.stockItemsForm .get(controlName)?.dirty ||
        this.stockItemsForm .get(controlName)?.touched) &&
      this.stockItemsForm .get(controlName)?.invalid
    );
  }

  onSubmit() {
    // this.newItemEvent.emit(value)

    console.log(this.stockItemsForm.value);
    this.stockItemsForm.reset();
  }

}
