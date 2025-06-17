# vite兼容低版本内核

<div style="color: skyblue">Q：webView版本过低造成vite中的?.链式语法不被识别问题?</div>
<div style="color: skyblue">A：通过@vitejs/plugin-legacy插件来进行打包兼容处理</div>


## 使用@vitejs/plugin-legacy插件（项目环境：vite + vue3）
1.  安装@vitejs/plugin-legacy插件
   
    ```shell
    npm install @vitejs/plugin-legacy -D
    ```

2.  在vite.config.js中配置:
   
    ```javascript
    import legacy from '@vitejs/plugin-legacy'

    export default defineConfig({
          plugins: [
            legacy({
            targets: ['chrome 52'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            renderLegacyChunks: true,
            polyfills: [
                'es.symbol',
                'es.array.filter',
                'es.promise',
                'es.promise.finally',
                'es/map',
                'es/set',
                'es.array.for-each',
                'es.object.define-properties',
                'es.object.define-property',
                'es.object.get-own-property-descriptor',
                'es.object.get-own-property-descriptors',
                'es.object.keys',
                'es.object.to-string',
                'web.dom-collections.for-each',
                'esnext.global-this',
                'esnext.string.match-all',
            ],
            }),
        ],
    })
    ```