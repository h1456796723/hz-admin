import { RouteRecordRaw } from 'vue-router'

type Meta = {
  title: string;
  icon: string;
}

export type MyRoutes = {
  path: string;
  name: string;
  componentPath: string;
  title: string;
  children?: MyRoutesRecordRaw[];
  component?: any; // 定义为组件类型
  meta?: Meta; // 定义为元数据类型
}

export type MyRoutesRecordRaw = RouteRecordRaw & MyRoutes

export type MenuItemType = {
  data: Partial<MyRoutes>
}