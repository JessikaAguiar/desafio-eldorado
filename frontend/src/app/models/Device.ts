import Category from "./Category";

export default class Device {
  id: number = 0;
  name: string = '';
  category_id: number = 0;
  category: Category = new Category();
  color: string = '';
  part_number: number = 0;
}
