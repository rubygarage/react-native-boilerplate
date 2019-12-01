import { windowSize } from '../size';

describe('size', () => {
  it('returns window size', () => {
    const { width, height } = windowSize;
    expect(width).toEqual(750);
    expect(height).toEqual(1334);
  });
});
