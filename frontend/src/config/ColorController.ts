import { pallette } from './pallette';

export class ColorController {
  public static instances: ColorController[] = [];

  public layer!: typeof pallette.black | typeof pallette.white;
  public background!: typeof pallette.black | typeof pallette.white;

  constructor() {
    ColorController.instances.push(this);
    ColorController.update();
  }

  static update() {
    this.instances.forEach((instance) => {
      instance.update();
    });
  }

  public update() {
    if (!localStorage) return;

    const clr = JSON.parse(localStorage.getItem('color') || '{}');
    if (clr.dark) {
      this.layer = pallette.white;
      this.background = pallette.black;
    } else {
      this.background = pallette.white;
      this.layer = pallette.black;
    }
  }

  public dark() {
    if (!localStorage) return;
    localStorage.setItem('color', JSON.stringify({ dark: true }));
    ColorController.update();
  }

  public light() {
    if (!localStorage) return;
    localStorage.setItem('color', JSON.stringify({ dark: false }));
    ColorController.update();
  }
}
