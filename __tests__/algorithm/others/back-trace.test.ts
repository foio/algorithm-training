import { backTrace, backTrace1 } from '../../../src/algorithm/others/queen';

describe('back trace', () => {
  it('back trace', () => {
    backTrace([1, 2, 3], []);
  });

  it('back trace1', () => {
    backTrace1(3, 0, {});
  });
});
