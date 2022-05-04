import { Component, OnInit } from '@angular/core';
import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import Category from 'src/app/models/Category';
import Device from 'src/app/models/Device';
import IResponse from 'src/app/models/IResponse';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-devices-views',
  templateUrl: './devices-views.component.html',
  styleUrls: ['./devices-views.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DevicesViewsComponent implements OnInit {
  faMarker = faMarker;
  faTrash = faTrash;
  newDevice = new Device();
  editDevice = new Device();
  devicesList: Device[] = [];
  categoriesList: Category[] = [];

  constructor(
    private devicesService: DeviceService,
    private categoriesService: CategoryService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.listCategory()
    this.getAll()
  }

  listCategory() {
    this.categoriesService.getCategories().subscribe((response: IResponse<Category[]>) => {
      this.categoriesList = response.content
    });
  }

  getAll(): void {
    this.devicesService.getDevices().subscribe((response: IResponse<Device[]>) => {
      this.devicesList = response.content
    });
  }

  save(): void {
    this.newDevice.category_id = this.newDevice.category.id

    this.devicesService.createDevice(this.newDevice).subscribe(() => {
      this.getAll()
      this.newDevice = new Device()
    })
  }

  formatNumberCategory(id: string): number {
    return parseInt(id)
  }

  edit(device: Device): void {
    this.devicesService.editCategory(device.id, device).subscribe(() => {
      this.getAll()
      this.modalService.dismissAll(device)
    })
  }

  delete(id: number): void {
    this.devicesService.deleteDevice(id).subscribe(() => {
      this.getAll()
    })
  }

  openModal(content: any, device: Device) {
    this.editDevice = device
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true})
  }

}
