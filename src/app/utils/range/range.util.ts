export const range = (start: number, stop: number, step = 1): number[] => {
  if (step === 0) {
    return [];
  }

  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step,
  );
};
