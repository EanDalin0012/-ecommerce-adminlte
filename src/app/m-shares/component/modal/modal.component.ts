import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  message: string;
  constructor(
    private modalService: ModalService
  ) {
    this.modalService.currentMessage.subscribe(message => this.message = message);
   }

  ngOnInit(): void {
    this.modalService.currentMessage.subscribe(message => this.message = message)
  }

}
