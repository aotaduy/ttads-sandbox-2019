import { TestBed } from '@angular/core/testing';

import { PasswordValidatorService } from './password-validator.service';

fdescribe('PasswordValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service).toBeTruthy();
  });

  it('should validate empty password', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service.validate('')).toEqual(false);
  });
  it('should validate 8 digit password', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service.validate('12345678')).toEqual(false);
  });
  it('should validate uppercase and lowercase letters digit password', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service.validate('A12345678a')).toEqual(true);
  });
  it('should not validate uppercase and non lowercase letters digit password', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service.validate('A12345678')).toEqual(false);
  });
  it('should  validate symbols', () => {
    const service: PasswordValidatorService = TestBed.get(PasswordValidatorService);
    expect(service.validate('aA123!!""#$@')).toEqual(false);
  });
});
