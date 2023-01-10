import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // private visible = false;
  private modals: IModal[] = [];

  constructor() {}

  // To register a modal
  register(id: string): void {
    this.modals.push({
      id,
      visible: false,
    });
  }

  // To unregister a modal
  unregister(id: string): void {
    this.modals = this.modals.filter((ele) => ele.id !== id);
  }

  // To check if the modal is opened or not
  isModalOpen(id: string): boolean {
    return !!this.modals.find((ele) => ele.id === id)?.visible;
  }

  // To toggle a modal
  toggleModal(id: string): void {
    const modal = this.modals.find((modal) => modal.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
