// Represent a specific value of a coin
class Coin {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue() {
    return this.value;
  }

  public setValue(val: number) {
    this.value = val;
  }

  public getScale(scale: number): number {
    return this.checkScale(scale, this.value);
  }

  private checkScale(scale: number, num: number, count: number = 0): number {
    const divident = num / scale;
    if (divident >= 1) {
      return this.checkScale(scale, divident, count + 1);
    }
    return count;
  }
}

export default Coin;
