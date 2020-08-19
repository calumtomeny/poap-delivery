// Types
import { AirdropEvent } from 'lib/types';

// Events addresses
import yamHeroes from 'lib/events/yam';

const events: AirdropEvent = {
  yam: {
    contractAddress: '0x0000',
    addresses: yamHeroes,
    eventId: 1000,
    githubLink: 'https://github.com/poapxyz',
  },
};

export default events;
