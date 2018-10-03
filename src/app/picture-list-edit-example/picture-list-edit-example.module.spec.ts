import { PictureListEditExampleModule } from './picture-list-edit-example.module';

describe('PictureListEditExampleModule', () => {
  let pictureListEditExampleModule: PictureListEditExampleModule;

  beforeEach(() => {
    pictureListEditExampleModule = new PictureListEditExampleModule();
  });

  it('should create an instance', () => {
    expect(pictureListEditExampleModule).toBeTruthy();
  });
});
