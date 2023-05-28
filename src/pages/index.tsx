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
  );
}
