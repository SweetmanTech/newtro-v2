import { createCollectorClient } from "@zoralabs/protocol-sdk";
import { CHAIN_ID } from "../consts";
import { getPublicClient } from "../viem";
import { Address } from "viem";

const getTokensOfContract = async (tokenContract: Address) => {
  const publicClient = getPublicClient(CHAIN_ID);
  const collectorClient = createCollectorClient({
    chainId: CHAIN_ID,
    publicClient,
  });
  const response = await collectorClient.getTokensOfContract({
    tokenContract,
  });
  return response;
};

export default getTokensOfContract;
