import { ReactElement } from "react";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const locale = ["en", "ca", "ie"];
  return locale;
}

export default function BlogPostPage({ params }: { params: any }) {
  return <p>test {params.locale}</p>;
}
