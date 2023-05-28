# Next 实战说明
## Next与React的区别和应用场景
## Next如何设置理由信息
Next 默认情况下以pages文件夹下的路由为直接路由信息，如pages/address/index.tsx,路由就是/address
## Next理由如何跳转
## Next如何撰写样式文件
## Next如何加载静态资源
Next默认静态资源存在public文件夹下，因此引入静态资源路径时不需要包含public路径
```ts
// 此图片保存在public/images/music.jpeg
import Image from "next/image";
export default function Address() {
  return (
    <>
      <div>
        图片组件测试
        <Image
          src="/images/music.jpeg"
          alt="the music i love"
          width={300}
          height={500}
        ></Image>
      </div>
    </>
  );
}

```

## Next设置单个页面title
Next 提供了可以修改html head的组件Head，引入Head后加入title即可修改单个页面的title
```tsx
import Head from "next/head";

export default function Home() {
  return (
      <div>
        <Head>
          <title>next 实战展示</title>
        </Head>
      </div>
    </>
  );
}

```
## Next单个页面加入script脚本
与上述更改head一样，Next为script也提供了一个Script组件，该组件可以让开发者决定加入的script文件什么时候执行，同时支持加入回调函数
```tsx
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div>测试</div>
      <div>
        <Link href="/address">跳转address路由</Link>
      </div>
      <div>
        <Head>
          <title>next 实战展示</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`脚本已加入`)}
        />
      </div>
    </>
  )
}


```
