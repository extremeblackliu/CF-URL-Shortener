# CF-URL-Shortener
Cloudflare worker 上的URL缩短器。

# 部署
0. 在 [第 20 行](https://github.com/extremeblackliu/CF-URL-Shortener/blob/main/_worker.js#L20) 修改你的域名。
1. 创建一个新 Worker , 复制 `_worker.js` 并粘贴到 `worker.js`。
2. 在 WebIDE 页面的目录下创建 `router.js` 然后复制 `router.js` 的内容并粘贴进去。
3. 部署。
4. 新建 KV命名空间。
5. 在 Worker 设置中使用如下规则绑定 KV命名空间 `DB` => `YOUR_NEW_KV_NAMESPACE`。
6. 完成。

# 特征
- 简单, 65 行代码。
- 少功能，轻量，不需要不必要的功能。
- 你尔朵龙吗我说了少功能还看。

# 用例

### 生成
访问 `https://yoursitedomain.com/gen/长链`, 然后会得到一个短链, 譬如 `https://yoursitedomain.com/W1t2F`

### 访问

访问 `https://yoursitedomain.com/W1t2F`, 会被重定向到 `长链接`
