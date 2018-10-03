import { PictureEditExampleModule } from './picture-edit-example.module';

describe('PictureEditExampleModule', () => {
  let pictureEditExampleModule: PictureEditExampleModule;

  beforeEach(() => {
    pictureEditExampleModule = new PictureEditExampleModule();
  });

  it('should create an instance', () => {
    expect(pictureEditExampleModule).toBeTruthy();
  });
});
