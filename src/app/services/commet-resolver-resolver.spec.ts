import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { commetResolverResolver } from './commet-resolver-resolver';

describe('commetResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => commetResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
