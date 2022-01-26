import { Component, OnInit } from '@angular/core';
import { InventoryList } from './inventoryListInterface.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  inventoryList: InventoryList[] = [
    {
      id: 1,
      Item: "Men's Business Shoes",
      Quantity: 4,
      Price: 'N4,500.00',
    },
    {
      id: 2,
      Item: 'Oriamo Freepods',
      Quantity: 13,
      Price: ' N15,300.00',
    },
    {
      id: 3,
      Item: 'Dana Power bank',
      Quantity: 6,
      Price: 'N3,655.00',
    },
    {
      id: 4,
      Item: 'M40 Ulta-thin Wireless Mouse',
      Quantity: 9,
      Price: ' N2,785.00',
    },
    {
      id: 5,
      Item: "Men's Tracksuit Set Joggers",
      Quantity: 2,
      Price: 'N6,430.00',
    },
  ];

  ngOnInit(): void {}
  
  // onAddItems(){
  //     this.inventoryList.push(addItemsForm.value)
  // }


  // editItem(id: number, data: any) {
    // let index = this.inventoryList.findIndex((el) => el.id === id);
    // if (!index) return;

    // indexObj = {
    //   id: this.inventoryList[index].id,
    //   Item: data.Item || '',
    //   Quantity: data.Quantity || '',
    //   Price: data.Price || '',
    // };
  // }

}
