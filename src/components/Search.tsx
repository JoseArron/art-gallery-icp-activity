// Search.tsx

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { artworks } from "@/lib/galleryInfo";
import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchWord, setSearchWord] = useState("");
  const placeholders = artworks.map((artwork) => artwork.description);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchWord);
    setSearchWord("");
  };

  return (
    <div
      id="search"
      className="p-16 w-full flex flex-col justify-center bg-white items-center px-4"
    >
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        What type of my art do you want to see?
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
