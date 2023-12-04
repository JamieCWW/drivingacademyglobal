import React from "react";

import MainLayout from "./MainLayout";

import "./index.css";

import { InitSection } from "../components/Home/InitSection";
import { AboutUsSection } from "../components/Home/AboutUsSection";
import { Courses } from "../components/Home/Courses";
import { FrequentlyAskedQuestions } from "../components/Home/FrequentlyAskedQuestions";
import { Gallery } from "../components/Home/Gallery";
import { Footer } from "../components/Home/Footer";

export default function App() {
  return (
    <MainLayout>
      <InitSection />
      <AboutUsSection />
      <Courses />
      <FrequentlyAskedQuestions />
      <Gallery />
      <Footer />
    </MainLayout>
  );
}
