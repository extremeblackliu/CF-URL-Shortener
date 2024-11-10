import { Router } from './router.js'

const router = new Router();
router.cors();

function RandomStr() {
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 7; i++) {
        result += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }
    return result;
}

router.get('/gen/:url', async ({env, req}) => {
    
    const short = RandomStr();
    await env.DB.put(short, decodeURIComponent(req.params.url));

    return new Response('https://yoursitedomain.com/' + short);
});

router.get('/:short', async ({env, req}) => {

    let url = await env.DB.get(req.params.short)
    if(!url)
        return new Response('啥都木有  Σ(ﾟДﾟ；≡；ﾟдﾟ)');

    if(url.indexOf('http://') == -1 && url.indexOf('https://') == -1)
    {
        url = 'http://' + url;
    }
    return Response.redirect(url, 302);
});

router.get('/', () => {
    return new Response(`eeacks.cc的短链服务喵
    *                  *
    __                *
 ,db'    *     *
,d8/       *        *    *
888
\`db\\       *     *
  \`o\`_                    **
*               *   *     _      *
   *                     / )
    *  (\\ __ /) *       ( (  *
,-.,-.,)      (.,-.,-.,-.) ).,-.,-.
| @|  ={      }= | @|   / / | @|o |
_j__j__j_)     \`-------/ /__j__j__j_
________(               /___________
|  | @| \\              || o|O | @|
|o |  |,'\\       ,   ,'"|  |  |  |  hjw
vV\\|/vV|\`-'\\  ,---\\   | \\Vv\\hjwVv\\//v
           _) )    \`. \\ /
          (__/       ) )
                     (_/
    `);
});

export default {
    async fetch(request, env, ctx) {
        return router.handle(request, env, ctx)
    }
}
