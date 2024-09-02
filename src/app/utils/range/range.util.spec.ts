import { range } from './range.util';

describe('Range util', () => {
  let resRange: number[];

  beforeEach(() => {
    resRange = range(1, 10);
  });

  it('should be array length equal 10', () => {
    expect(resRange.length).toBe(10);
  });

  it('should be array start from 1', () => {
    const firstElement = resRange[0];

    expect(firstElement).toBe(1);
  });

  it('should be array end 10', () => {
    const lastElement = resRange[9];

    expect(lastElement).toBe(10);
  });
});

describe('Range util with step', () => {
  let resRange: number[];

  beforeEach(() => {
    resRange = range(5, 50, 5);
  });

  it('should be array length equal 10', () => {
    expect(resRange.length).toBe(10);
  });

  it('should be array start from 5', () => {
    const firstElement = resRange[0];

    expect(firstElement).toBe(5);
  });

  it('should be array end 50', () => {
    const lastElement = resRange[9];

    expect(lastElement).toBe(50);
  });

  it('should be array empty if step 0', () => {
    const res = range(1, 10, 0);

    expect(res.length).toBe(0);
  });
});
