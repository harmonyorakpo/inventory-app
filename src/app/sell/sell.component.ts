import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  sellItemsForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sellItemsForm = this.formbuilder.group({
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  controlIsError(controlName: string): boolean | undefined {
    return (
      (this.sellItemsForm.get(controlName)?.dirty ||
        this.sellItemsForm.get(controlName)?.touched) &&
      this.sellItemsForm.get(controlName)?.invalid
    );
  }

  onSubmit() {
    // this.newItemEvent.emit(value)

    console.log(this.sellItemsForm.value);
    this.sellItemsForm.reset();
  }
}
