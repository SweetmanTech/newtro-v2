import fetchFeaturedTokens from "@/lib/fetchFeaturedTokens";
import fetchURIs from "@/lib/ipfs/fetchURIs";
import mapFeaturedTokens from "@/lib/mapFeaturedTokens";
import { useState, useEffect } from "react";

const useFeaturedMints = () => {
  const [featuredMints, setFeaturedMints] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const init = async () => {
      const response = await fetchFeaturedTokens();
      const initialPageResppnse = response.slice(
        page * itemsPerPage,
        (page + 1) * itemsPerPage
      );
      const initialPageData = await fetchURIs(initialPageResppnse);
      console.log("SWEETS initialPageData", initialPageData);
      const mapped = mapFeaturedTokens(initialPageData);
      console.log("SWEETS mapped", mapped);
      setFeaturedMints(mapped);
    };
    init();
  }, []);
  return { featuredMints };
};

export default useFeaturedMints;
