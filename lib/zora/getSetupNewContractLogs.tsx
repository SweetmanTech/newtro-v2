import {
  CHAIN_ID,
  NEWTRO_ARTS_ADDRESS,
  NEWTRO_FIRST_ZORA_BLOCK,
} from "../consts";
import {
  zoraCreator1155FactoryImplAddress,
  zoraCreator1155FactoryImplABI,
} from "@zoralabs/protocol-deployments";
import { getPublicClient } from "../viem";

const getSetupNewContractLogs = async () => {
  const fromBlock = NEWTRO_FIRST_ZORA_BLOCK;
  const publicClient = getPublicClient(CHAIN_ID);
  const contractEvents = await publicClient.getContractEvents({
    address: zoraCreator1155FactoryImplAddress[CHAIN_ID],
    abi: zoraCreator1155FactoryImplABI,
    eventName: "SetupNewContract",
    args: {
      creator: NEWTRO_ARTS_ADDRESS,
    },
    fromBlock,
  });
  return contractEvents;
};

export default getSetupNewContractLogs;
