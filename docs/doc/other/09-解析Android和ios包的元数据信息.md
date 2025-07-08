# 解析Android和ios包的元数据信息
npm库：`npm i app-info-parser`

```javascript
const AppInfoParser = require('app-info-parser')
// 解析apk包的元数据信息
const parser = new AppInfoParser('../packages/test.apk') // or xxx.ipa
parser.parse().then(result => {
  console.log('app info ----> ', result)
  console.log('icon base64 ----> ', result.icon)
}).catch(err => {
  console.log('err ----> ', err)
})
```
