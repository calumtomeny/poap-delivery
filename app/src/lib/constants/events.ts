// Types
import { AirdropEvent } from 'lib/types';

// Events addresses
import yamHeroes from 'lib/events/yam';
import medallaResuscitators from 'lib/events/resuscitators';

const events: AirdropEvent = {
  yam: {
    key: 'yam-heroes',
    contractAddress: process.env.GATSBY_YAM_AIRDROP_CONTRACT || '',
    addresses: yamHeroes,
    eventIds: process.env.GATSBY_YAM_EVENT_IDS
      ? process.env.GATSBY_YAM_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink: 'https://github.com/poapxyz/poap-delivery/tree/development/events/yam-heroes',
  },
  resuscitator: {
    key: 'resuscitator',
    contractAddress: process.env.GATSBY_RESUSCITATOR_AIRDROP_CONTRACT || '',
    addresses: medallaResuscitators,
    eventIds: process.env.GATSBY_RESUSCITATOR_EVENT_IDS
      ? process.env.GATSBY_RESUSCITATOR_EVENT_IDS.split(',').map((i) => parseInt(i, 10))
      : [],
    githubLink:
      'https://github.com/poapxyz/poap-delivery/tree/development/events/medalla-resuscitators',
  },
};

export default events;
