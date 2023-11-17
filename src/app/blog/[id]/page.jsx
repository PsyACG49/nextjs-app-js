import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
            dolorum, repellendus consequatur quis ducimus sunt? Debitis delectus
            placeat, possimus nobis aut sint eos quisquam provident ducimus
            facilis voluptates maxime.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Pear</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed
          labore numquam officiis asperiores enim optio, consequuntur
          perspiciatis. Sit nihil hic, quaerat earum quas facilis nesciunt iusto
          culpa omnis assumenda. Lorem ipsum dolor sit amet consectetur
          <br />
          <br />
          adipisicing elit. Animi praesentium sed officiis dolorem explicabo
          maiores hic ullam ab fugiat adipisci dicta, doloribus consequuntur
          fugit reprehenderit illum sit aliquid quisquam minima Lorem ipsum
          <br />
          <br />
          dolor sit amet consectetur adipisicing elit. Maxime doloribus suscipit
          laudantium odit earum minus tempora voluptates nihil. Quasi, quo illum
          architecto provident iusto accusamus recusandae nostrum minus officia
          aliquid?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
