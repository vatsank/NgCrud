import { Component, OnInit } from '@angular/core';
import { MedicineApiService } from '../../services/medicine-api.service';
import { Medicine } from '../../models/medicine';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  added: boolean;
  srchCondition = '';
  medList: Medicine[];
  ratePerUnit = 0;
  medicine: Medicine = {
    id: 0,
    name: '',
    category: '',
    mfgBy: 'Lupin',
    ratePerUnit: 0
  };
  constructor(private service: MedicineApiService) { }

  ngOnInit() {

     this.service.findAll()
       .subscribe(data => this.medList = data);
  }

   edit(val) {
       console.log(val);
       this.medicine = val;
       this.service.update(this.medicine).subscribe(data => this.medicine = data);
   }

   remove(val) {
       console.log(val);
     this.medList = 
        this.medList.filter(v => v.id !== val);

        this.service.remove(val).subscribe(data => console.log(data) );
   }

   add(data) {

     this.service.add(data).subscribe(resp =>
        { this.medList.push(data) ; this.added = true; });
   }
}

