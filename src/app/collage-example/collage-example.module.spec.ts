import { CollageExampleModule } from './collage-example.module';

describe('CollageExampleModule', () => {
  let collageExampleModule: CollageExampleModule;

  beforeEach(() => {
    collageExampleModule = new CollageExampleModule();
  });

  it('should create an instance', () => {
    expect(collageExampleModule).toBeTruthy();
  });
});
