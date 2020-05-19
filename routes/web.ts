import * as Controller from "../app/ControllerMap.ts";

const router = [
    {
        url: '/',
        method: 'get',
        html: false,
        path: null,
        return: new Controller.Home().index,
    },
    {
        url: '/example',
        method: 'get',
        html: false,
        path: null,
        return: new Controller.Home().get,
    },
    {
        url: '/example',
        method: 'post',
        html: false,
        path: null,
        return: new Controller.Home().post,
    },
    {
        url: '/example/:id',
        method: 'get',
        html: false,
        path: null,
        return: new Controller.Home().edit,
    },
    {
        url: '/example/update/:id', // or /example/:id
        method: 'post', // or put
        html: false,
        path: null,
        return: new Controller.Home().put,
    },
    {
        url: '/example/:id', 
        method: 'post', // or delete
        html: false,
        path: null,
        return: new Controller.Home().delete,
    }
];

export default router;