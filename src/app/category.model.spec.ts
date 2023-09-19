import { Category } from './category.model';

describe('CategoriaModel', () => {
  it('should create an instance', () => {
    expect(new Category(0,"")).toBeTruthy();
  });
});
