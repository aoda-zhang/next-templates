import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export default function Address() {
  return (
    <>
      <div className={styles.address}>address路由页面展示</div>
      <Link href="/">跳转到首页</Link>
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
