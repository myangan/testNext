import { ReactElement } from "react";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const arr = [];
  const locale = ["en", "ca", "ie"];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < locale.length; j += 1) {
      arr.push({ locale: locale[j], category: `page-${i}` });
    }
  }
  console.log(arr);
  return arr;
}

export default function BlogPostPage(props: any) {
  console.log(props);

  return <p>test in test</p>;
}
