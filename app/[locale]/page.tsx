import { ReactElement } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const locale = ["en", "ca", "ie"];
  return locale;
}

export default function BlogPostPage(props: any) {
  return <p>test</p>;
}
