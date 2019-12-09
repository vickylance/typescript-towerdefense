export default abstract class Building {
  constructor(private hp: number, private shield: number) {}
  abstract upgrade();
}
