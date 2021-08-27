import Head from "next/head";
import { Hero, HeadComponent } from "../components";

export default function Home() {
  return (
    <>
      <HeadComponent
        title={"Slavo Popovic - Software Web Developer"}
      />
      <Hero />
    </>
  );
}
