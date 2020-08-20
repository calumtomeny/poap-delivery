// Types
import { AirdropEvent } from 'lib/types';

// Events addresses
import yamHeroes from 'lib/events/yam';

const events: AirdropEvent = {
  yam: {
    contractAddress: process.env.GATSBY_YAM_AIRDROP_CONTRACT || '',
    addresses: yamHeroes,
    eventIds: process.env.GATSBY_YAM_EVENT_IDS
      ? process.env.GATSBY_YAM_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poapxyz/poap-delivery/tree/development/events/yam-heroes',
  },
};

export default events;
