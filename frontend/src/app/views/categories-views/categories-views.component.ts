import { Component, OnInit } from '@angular/core';
import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import IResponse from 'src/app/models/IResponse';
import { CategoryService } from 'src/app/services/category.service';
import Category from 'src/app/models/Category';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories-views',
  templateUrl: './categories-views.component.html',
  styleUrls: ['./categories-views.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CategoriesViewsComponent implements OnInit {
  faMarker = faMarker;
  faTrash = faTrash;
  newCategory = new Category();
  editCategory = new Category();
  categoriesList: Category[] = [];

  constructor(
    private categoriesService: CategoryService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ){
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
      this.categoriesService.getCategories().subscribe((response: IResponse<Category[]>) => {
        this.categoriesList = response.content
      });
  }

  save(): void {
    this.categoriesService.createCategory(this.newCategory).subscribe(() => {
        this.getAll()
        this.newCategory = new Category()
    })
  }

  edit(category: Category): void {
    this.categoriesService.editCategory(category.id, this.editCategory).subscribe(() => {
      this.getAll()
      this.modalService.dismissAll(category)
    })
  }

  delete(id: number): void {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.getAll()
    })
  }

  openModal(content: any, category: Category) {
    this.editCategory = category
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true})
  }
}
