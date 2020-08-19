// Types
import { AirdropEvent } from 'lib/types';

// Events addresses
import yamHeroes from 'lib/events/yam';

const events: AirdropEvent = {
  yam: {
    contractAddress: '0x4ed27580F2B93A3EFD37F8Dcf7dbA28e117C362C',
    addresses: yamHeroes,
    eventId: 362,
    githubLink: 'https://github.com/poapxyz',
  },
};

export default events;
