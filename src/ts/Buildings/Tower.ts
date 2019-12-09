interface ITower {}

export default abstract class Tower {
  private basePrice: number;
  constructor() {}
  public abstract upgradeTower();
}
