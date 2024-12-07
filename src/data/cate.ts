export class Cate {
  id?: number;
  name: string;
  icon: string;
  url: string;
  mark: string;
  level: number;
  order: number;
  type: string;
  children?: Cate[];
}