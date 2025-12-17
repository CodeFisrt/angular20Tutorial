import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { adminReslverResolver } from './admin-reslver-resolver';

describe('adminReslverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => adminReslverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
