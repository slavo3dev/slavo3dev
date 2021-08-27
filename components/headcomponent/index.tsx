import Head from "next/head";

type Props = {
  title: string;
};

export function HeadComponent({ title }: Props) {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
      ></link>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
      ></script>
    </Head>
  );
}
