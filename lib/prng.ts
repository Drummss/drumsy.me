export class Prng {
  constructor(private seed: number = 0) {
    if (isNaN(seed) || !Number.isInteger(seed)) {
      throw new Error('You must pass a valid integer as a seed.');
    }
  }

  public next(): number {
    return (this.seed = (this.seed * 16807) % 2147483647);
  }

  public nextFloat(): number {
    return (this.next() - 1) / 2147483647;
  }
}
