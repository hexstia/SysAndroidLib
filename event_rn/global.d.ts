declare module "*.json"
declare module "*.png"


import { EventModel, UserModel } from '../event_egg/global';
import router from './apps/src/main/router';

// 导出模型
export { UserModel, EventModel };
export type TRouterName = keyof typeof router;
