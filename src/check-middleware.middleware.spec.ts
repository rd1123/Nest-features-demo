import { CheckMiddlewareMiddleware } from './check-middleware.middleware';

describe('CheckMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckMiddlewareMiddleware()).toBeDefined();
  });
});
