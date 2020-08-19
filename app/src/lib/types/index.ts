export type PoapEvent = {
  id: number;
  fancy_id: string;
  name: string;
  event_url: string;
  image_url: string;
  country: string;
  city: string;
  description: string;
  year: number;
  start_date: string;
  end_date: string;
  virtual_event?: boolean;
  supply?: number;
};

export type UserPoap = {
  event: PoapEvent;
  tokenId: string;
  owner: string;
};

export type AirdropEventData = {
  contractAddress: string;
  addresses: {
    string: number[];
  } | null;
  eventId: number;
  githubLink: string;
};

export type AirdropEvent = {
  [name: string]: AirdropEventData;
};

export type Transaction = {
  address: string;
  hash: string;
  status: 'passed' | 'pending' | 'failed';
};
