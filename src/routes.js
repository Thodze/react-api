import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
    {
        path : '/',
        exact : true,
        main: () => <HomePage/>
    },
    {
        path : '/products',
        exact : true,
        main: () => <ProductListPage/>
    },
    {
        path : '/products/add',
        exact : true,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path : '/products/:id/edit',
        exact : true,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path : '',
        exact : true,
        main: () => <NotFoundPage/>
    }
];

export default routes;