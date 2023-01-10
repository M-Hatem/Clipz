import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(private modal: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    this.modal.register('auth');
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
