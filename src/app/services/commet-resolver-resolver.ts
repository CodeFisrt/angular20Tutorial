import { ResolveFn } from '@angular/router';

export const commetResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
