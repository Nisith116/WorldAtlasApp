import { DetailViewModule } from './detail-view.module';

describe('DetailViewModule', () => {
  let detailViewModule: DetailViewModule;

  beforeEach(() => {
    detailViewModule = new DetailViewModule();
  });

  it('should create an instance', () => {
    expect(detailViewModule).toBeTruthy();
  });
});
