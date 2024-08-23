import { ReactElement } from "react";
import testImage from "@/public/image.png";
import Image from "next/image";

export const dynamicParams = false;
// export const dynamic = "force-static";
// export const runtime = "edge";
// export const dynamic = "force-static";

export function generateStaticParams() {
  const arr = [];
  const locale = ["en", "ca", "ie"];
  for (let i = 0; i < 1300; i += 1) {
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
    <>
      <Image src={testImage} alt={"test"} />
      {/* <img alt="test" height={300} src={testImage.src} width={300} /> */}
      <p>
        test in test-{params.locale}-{params.category}
      </p>
    </>
  );
}
