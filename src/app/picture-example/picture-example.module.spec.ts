import { PictureExampleModule } from './picture-example.module';

describe('PictureExampleModule', () => {
  let pictureExampleModule: PictureExampleModule;

  beforeEach(() => {
    pictureExampleModule = new PictureExampleModule();
  });

  it('should create an instance', () => {
    expect(pictureExampleModule).toBeTruthy();
  });
});
