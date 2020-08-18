import React, { FC } from 'react';

// assets
import BuiltOnEthereum from 'assets/images/built-on-ethereum.png';

const BuiltWith: FC = () => (
  <img alt="Built on Ethereum" className="built-on-eth" src={BuiltOnEthereum} />
);

export default BuiltWith;
