/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module "uuid"  // 解决uuid类型