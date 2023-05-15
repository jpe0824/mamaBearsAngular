import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EnrollComponent } from './enroll/enroll.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  modalRef: MdbModalRef<EnrollComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {}

  openModal() {
    this.modalRef = this.modalService.open(EnrollComponent);
  }
}
