import { atom, selector } from 'recoil';

const mandalartState = atom({
  key: 'mandalartState',
  default: {
    core: '',
    details: new Array(8).fill(0).map((_) => ({
      core: '',
      details: new Array(8).fill(0).map((_) => ''),
    })),
  },
});

const detailState = selector({
  key: 'detail1State',
  get: ({ get }) => {
    const mandalart = get(mandalartState);
    return (index: number) => {
      return mandalart.details[index];
    };
  },
});
