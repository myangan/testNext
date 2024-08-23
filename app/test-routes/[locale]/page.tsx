import { ReactElement } from "react";

export const dynamicParams = false;
// export const dynamic = "force-static";
// export const runtime = "edge";

export function generateStaticParams() {
  const locale = ["en", "ca", "ie"];
  return locale.map((item) => {
    return {
      locale: item,
    };
  });
}

export default function BlogPostPage({ params }: { params: any }) {
  return <p>test {params.locale}</p>;
}
