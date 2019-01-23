# magisterjs-dynamic-authcode

This package automatically fetches the authentication code used by [`magister.js`](https://github.com/simplyGits/MagisterJS).

Using this package is recommended if you use `magister.js` in an app. Alternatively you can execute an HTTP GET-request yourself or rely on the authentication code that comes bundled in `magister.js`. See the [`magisterjs-authcode` repository](https://github.com/simplyGits/magisterjs-authcode) for more information.

`npm install @magisterjs/dynamic-authcode`

```js
const getAuthCode = require('@magisterjs/dynamic-authcode');

const authCode = await getAuthCode();
```
