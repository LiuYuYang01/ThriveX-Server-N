export interface Article {
  id: number;
  title: string;
  description?: string;
  content: string;
  cover?: string;
  view?: number;
  comment?: number;
  tag_ids?: string;
  is_draft: number;
  is_del: number;
  create_time: string;
}

export interface ArticleCate {
  id: number;
  article_id: number;
  cate_id: number;
}

export interface ArticleConfig {
  id: number;
  status?: 'default' | 'no_home' | 'hide';
  password?: string;
  article_id: number;
}

export interface Comment {
  id: number;
  name: string;
  avatar?: string;
  content: string;
  email?: string;
  url?: string;
  article_id: number;
  comment_id?: number;
  audit_status?: number;
  create_time: string;
}

export interface Config {
  name: string;
  value: string;
  group: string;
  note?: string;
}

export interface Footprint {
  id: number;
  title: string;
  content?: string;
  address: string;
  position: string;
  images?: any;
  create_time: string;
}

export interface Link {
  id: number;
  title: string;
  description: string;
  email?: string;
  image: string;
  url?: string;
  rss?: string;
  order: number;
  type_id: number;
  audit_status: number;
  create_time: string;
}

export interface LinkType {
  id: number;
  name: string;
  is_admin: number;
  order: number;
}

export interface Record {
  id: number;
  content: string;
  images?: any;
  create_time: string;
}

export interface Role {
  id: number;
  name: string;
  mark: string;
  description: string;
}

export interface Route {
  id: number;
  path: string;
  description: string;
}

export interface RouteRole {
  id: number;
  route_id: number;
  role_id: number;
}

export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  email?: string;
  avatar?: string;
  info?: string;
  role_id: string;
  create_time: string;
}

export interface Wall {
  id: number;
  name?: string;
  content: string;
  color?: string;
  email?: string;
  cate_id: number;
  audit_status?: number;
  create_time: string;
}

export interface WallCate {
  id: number;
  name: string;
  mark: string;
  order: number;
} 