import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TakingDeliveryService } from '../services/taking-delivery.service';

@Component({
  selector: 'app-address-printing',
  templateUrl: './address-printing.component.html',
  styleUrls: ['./address-printing.component.css']
})
export class AddressPrintingComponent implements OnInit {

  constructor(public takingDeliveryService:TakingDeliveryService) { }

  ngOnInit(): void {
    debugger
    this.takingDeliveryService.GetAllOrder().subscribe(data=>
      this.takingDeliveryService.newTakingDelivery=data)
  }

    printComponent(cmpName:string) {
      debugger
    const printContent = document.getElementById(cmpName);
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt?WindowPrt.document.write(printContent?printContent.innerHTML:""):null;
    // WindowPrt?WindowPrt.document.write(""):null;// אם רוצים להוסיף טקסט נוסף למסמך בנוסף למה שיש עכשיו
    
    // WindowPrt?WindowPrt.document.
    debugger
    WindowPrt?WindowPrt.document.close():null
    
    WindowPrt?WindowPrt.focus():null;
    WindowPrt?WindowPrt.print():null;
   
  
}

}
