import Building from "./Building";

export default class ArmsLab extends Building {
  constructor(hp: number, shield: number) {
    super(hp, shield);
  }
  public upgrade() {}
}
