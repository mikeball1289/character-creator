"use client";

import InputsProvider from "@/data/InputsProvider";
import CharacterCreatorPage from "@/sections/CharacterCreatorPage/CharacterCreatorPage";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <InputsProvider>
      <CharacterCreatorPage />
    </InputsProvider>
  );
};

export default Home;
