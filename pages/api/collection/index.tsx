import type { NextApiRequest, NextApiResponse } from "next";
import { Address } from "viem";
import { format } from "./format";
import getTokensOfContract from "@/lib/zora/getCollection";

const DEFAULT_COLLECTION = "0xdDD91Df05a3Beb9a2f6b55160CE81583F16fedBa";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const collectionAddress = (req.query?.collectionAddress ||
      DEFAULT_COLLECTION) as Address;
    console.log(collectionAddress);
    const response = await getTokensOfContract(collectionAddress);
    const data = format(response);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default handler;
