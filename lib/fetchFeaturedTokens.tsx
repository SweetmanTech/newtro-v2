const fetchFeaturedTokens = async () => {
  try {
    console.log("SWEETS FETCHING");
    const response = await fetch("/api/tokens/featured");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("SWEETS data", data);
    const tokens = data.data.flatMap((item: any) => item.tokens);
    console.log("SWEETS tokens", tokens);
    return tokens;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchFeaturedTokens;
