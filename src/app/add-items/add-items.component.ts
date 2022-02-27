import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {
  addItemsForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addItemsForm = this.fb.group({
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
      price: ['', Validators.required],
    });
    // Validators.required
  }

  controlIsError(controlName: string): boolean | undefined {
    return (
      (this.addItemsForm.get(controlName)?.dirty ||
        this.addItemsForm.get(controlName)?.touched) &&
      this.addItemsForm.get(controlName)?.invalid
    );
  }

  onSubmit() {
    // this.newItemEvent.emit(value)

    console.log(this.addItemsForm.value);
    this.addItemsForm.reset();
  }
}
