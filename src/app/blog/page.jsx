import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              width={400}
              height={250}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>dec</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
