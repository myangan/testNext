import { ReactElement } from "react";

export const dynamicParams = false;
// export const dynamic = "force-static";
// export const runtime = "edge";

export async function generateStaticParams() {
  const arr = [];
  const locale = ["en", "ca", "ie"];
  for (let i = 0; i < 1000; i += 1) {
    for (let j = 0; j < locale.length; j += 1) {
      arr.push({ locale: locale[j], category: `page-${i}` });
    }
  }

  return arr;
}

export default function BlogPostPage({
  params,
}: {
  params: {
    locale: string;
    category: string;
  };
}) {
  return (
    <p>
      test in test-{params.locale}-{params.category}
    </p>
  );
}
