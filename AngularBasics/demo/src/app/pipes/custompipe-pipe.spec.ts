import { CustompipePipe } from '../pipes/custompipe-pipe';

describe('CustompipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustompipePipe();
    expect(pipe).toBeTruthy();
  });
});
