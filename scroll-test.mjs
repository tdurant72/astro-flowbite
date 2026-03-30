import { scroll } from 'motion';

scroll((info) => {
  console.log("SCROLL INFO:", Object.keys(info), info);
});
