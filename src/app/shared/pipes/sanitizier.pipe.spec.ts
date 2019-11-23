import { SanitizierPipe } from './sanitizier.pipe';

describe('SanitizierPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizierPipe();
    expect(pipe).toBeTruthy();
  });
});
