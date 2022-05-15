import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoriasProductosReducer from "./reducers/CategoriasProductos.reducer";
import EmprendedoresReducer from "./reducers/Emprendedores.reducer";
import FavoritosReducer from "./reducers/Favoritos.reducer";
import ProductosReducer from "./reducers/Productos.reducer";
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categorias: CategoriasProductosReducer,
    productos: ProductosReducer,
    emprendedores: EmprendedoresReducer,
    favoritos: FavoritosReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));