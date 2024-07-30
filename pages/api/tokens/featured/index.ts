import getSetupNewContractLogs from '@/lib/zora/getSetupNewContractLogs';
import type { NextApiRequest, NextApiResponse } from 'next';
import getTokensOfContract from '@/lib/zora/getCollection';
import { Address } from 'viem';
import format from './format';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const logs = await getSetupNewContractLogs();
        const contractAddresses = logs.map(log => log.args.newContract);
        const tokenLists = await Promise.all(contractAddresses.map(address => getTokensOfContract(address as Address)));
        const serializedTokenLists = tokenLists.map(list => format(list));
        res.status(200).json({ data: serializedTokenLists });     
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
}

export default handler;
