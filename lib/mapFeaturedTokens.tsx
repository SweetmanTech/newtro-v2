const mapFeaturedTokens = (tokens: any[]) => {
  const mapped = tokens.map((token: any) => ({
    dropId: token.token.contract.name.toLowerCase().replace(/\s+/g, "-"),
    name: token.uriData.name,
    description: token.uriData.description,
    address: token.token.contract.address,
    tokenId: token.token.tokenId,
    webAssets: {
      previewAsset: {
        previewImage: token.uriData.image,
        mime: "image/png",
      },
      originalAsset: {
        originalAsset: token.uriData.content.uri,
        mime: token.uriData.content.mime,
      },
    },
  }));

  return mapped;
};

export default mapFeaturedTokens;
