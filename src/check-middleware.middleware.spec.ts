import { CheckMiddleware } from './check-middleware.middleware';

describe('CheckMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckMiddleware).toBeDefined();
  });
});
