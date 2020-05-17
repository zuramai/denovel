import * as Controller from "../app/ControllerMap.ts";

const router = [
    {
        url: '/',
        path: new Controller.Home().index(),
        method: 'get',
        html: true,
    },
    {
        url: '/',
        method: 'post',
        html: false,
        return: (ctx: any) => new Controller.Home().post(ctx),
    }
];

export default router;