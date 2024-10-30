# CF-URL-Shortener
simple URL Shortener for Cloudflare worker

[中文](https://github.com/extremeblackliu/CF-URL-Shortener/blob/main/README_cn.md)

# Deploy
0. Change your domain in [Line 20](https://github.com/extremeblackliu/CF-URL-Shortener/blob/main/_worker.js#L20)
1. Create new worker, copypaste `_worker.js` to `worker.js`.
2. Create new file in folder and name as `router.js` and paste `router.js` source from repository.
3. Deploy.
4. Create new KV namespace.
5. Bind KV namespace as `DB` => `YOUR_NEW_KV_NAMESPACE`.
6. Done.

# Features
- Simple, 65 lines of code.
- Featureless, no bloat or unnecessary features.
- Why you look at this, i said featureless.

# Usage

### Generate
Access `https://yoursitedomain.com/gen/LONG_URL_HERE`, result a shorten link, e.g. `https://yoursitedomain.com/W1t2F`

### Access

Access `https://yoursitedomain.com/W1t2F`, redirect to `LONG_URL_HERE`
