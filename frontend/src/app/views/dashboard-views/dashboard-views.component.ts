import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/Category';
import Device from 'src/app/models/Device';
import IResponse from 'src/app/models/IResponse';
import { CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-dashboard-views',
  templateUrl: './dashboard-views.component.html',
  styleUrls: ['./dashboard-views.component.css']
})
export class DashboardViewsComponent implements OnInit {
  devicesList: Device[] = [];
  categoriesList: Category[] = [];
  totalCategories: number = 0;
  totalDevices: number = 0;
  totalMotoBords: number = 0;
  totalXiamilhy: number = 0;
  totalOther: number = 0;

  constructor(
    private devicesService: DeviceService,
    private categoriesService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.listCategory()
    this.getAll()
  }

  listCategory() {
    this.categoriesService.getCategories().subscribe((response: IResponse<Category[]>) => {
      this.categoriesList = response.content
      if(this.categoriesList.length > 0){
        this.totalCategories = this.categoriesList.length
      }
    });
  }

  getAll(): void {
    this.devicesService.getDevices().subscribe((response: IResponse<Device[]>) => {
      this.devicesList = response.content
      if(this.devicesList.length > 0){
        this.totalDevices = this.devicesList.length
        let qtdMotoBords = this.devicesList.filter((device) => device.category.name === 'motobords')
        this.totalMotoBords = qtdMotoBords.length
        let qtdXiamilhy = this.devicesList.filter((device) => device.category.name === 'xiamilhy')
        this.totalXiamilhy = qtdXiamilhy.length
        let qtdOther = this.devicesList.filter((device) => device.category.name !== 'xiamilhy' && device.category.name !== 'motobords')
        this.totalOther = qtdOther.length
      }
    });
  }
}
