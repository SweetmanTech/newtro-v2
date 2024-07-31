import getIpfsLink from "./getIpfsLink";

const fetchURIs = async (items: any[]) => {
  return await Promise.all(
    items.map(async (item) => {
      const uriResponse = await fetch(getIpfsLink(item.token.tokenURI));
      const uriData = await uriResponse.json();
      return { ...item, uriData };
    })
  );
};

export default fetchURIs;
