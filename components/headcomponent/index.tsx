import Head from "next/head";

type Props = {
  title: string;
};

export function HeadComponent({ title }: Props) {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{title}</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
      ></script>
    </Head>
  );
}
