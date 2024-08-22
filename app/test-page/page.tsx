import { ReactElement } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const arr = [];
  for (let i = 0; i < 10000; i += 1) {
    arr.push(`page-${i}`);
  }
  return arr;
}

export default function BlogPostPage(props: any) {
  console.log(props);

  return <p>test</p>;
}
