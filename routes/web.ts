import * as Controller from "../app/ControllerMap.ts";

let HomeController = new Controller.Home();

const router = [
    {
        url: '/',
        method: 'get',
        html: false,
        return: HomeController.index,
    },
    {
        url: '/example',
        method: 'get',
        html: false,
        return: HomeController.get,
    },
    {
        url: '/example',
        method: 'post',
        html: false,
        return: HomeController.post,
    },
    {
        url: '/example/:id',
        method: 'get',
        html: false,
        return: HomeController.get,
    },
    {
        url: '/example/:id',
        method: 'put',
        html: false,
        return: HomeController.put,
    },
    {
        url: '/example/:id',
        method: 'delete',
        html: false,
        return: HomeController.delete,
    }
];

export default router;