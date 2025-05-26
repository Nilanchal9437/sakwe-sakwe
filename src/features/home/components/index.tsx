"use client";

import * as React from "react";

import Container from "@/components/Container";
import Accelerator from "@/features/home/components/Accelerator";
import Hero from "@/features/home/components/Hero";
import ContactForm from "@/features/home/components/ContactForm";
import Testimonials from "@/features/home/components/Testimonials";
import LearningOptions from "@/features/home/components/LearningOptions";
import CreatorStats from "@/features/home/components/CreatorStats";
import FindThePath from "@/features/home/components/FindThePath";

// import getDecks from "@/features/home/apis/getDecks";
// import { IDeck } from "@/features/home/types";

export default function Home() {
  // const [decks, setDecks] = React.useState<IDeck[]>([]);

  // const getDecksList = async () => {
  //   const response = await getDecks();
  //   setDecks(response);
  // };

  // React.useEffect(() => {
  //   getDecksList();
  // }, []);

  return (
    <>
      <Hero />
      <Container className="flex flex-col gap-y-20 my-20">
        <CreatorStats />
        <FindThePath />
        <Accelerator />
        <LearningOptions />
        <Testimonials />
      </Container>
      <ContactForm />
    </>
  );
}
