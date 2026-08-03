"use client";

import { useEffect, useMemo, useState } from "react";
import MuseumCard from "./MuseumCard";
import { getMuseums } from "@/services/museum";

interface Museum {
  _id: string;
  name: string;
  country: string;
  thumbnail: string;
  visitors: string;
  category: string;
}

interface Props {
  search: string;
  category: string;
}

export default function MuseumGrid({
  search,
  category,
}: Props) {
  const [museums, setMuseums] = useState<Museum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMuseums();
  }, []);

  async function fetchMuseums() {
    try {
      const res = await getMuseums();
      setMuseums(res.data.museums);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredMuseums = useMemo(() => {
    return museums.filter((museum) => {
      const matchesSearch = museum.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        museum.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [museums, search, category]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-10 text-center">
        Loading museums...
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredMuseums.map((museum) => (
          <MuseumCard
            key={museum._id}
            name={museum.name}
            country={museum.country}
            image={museum.thumbnail}
            visitors={museum.visitors}
          />
        ))}
      </div>
    </section>
  );
}