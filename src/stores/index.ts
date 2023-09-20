import { Modal } from "./Modal";
import {reactive} from "vue";
import { Products } from "./Products";
export const cartModal = reactive(new Modal());
export const userModal = reactive(new Modal());
export const productsStore = reactive(new Products([], []));
