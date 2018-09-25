// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import { expect } from 'chai';

import validate from '../src/helpers/validation';

describe('Form Validation Helpers ********************************************', () => {
  describe('Coordinate Validator', () => {
    it('should allow valid coordinates', () => {
      expect(validate.coords('-390249.123124')).to.equal(undefined);
      expect(validate.coords('123314.1432536')).to.equal(undefined);
      expect(validate.coords('-0.246')).to.equal(undefined);
      expect(validate.coords('0.556')).to.equal(undefined);
    });
    it('should block coordinates with invalid characters', () => {
      expect(validate.coords('--345345.435345')).to.equal('error');
      expect(validate.coords('-43534.6.34543534')).to.equal('error');
      expect(validate.coords('234.4534s5')).to.equal('error');
      expect(validate.coords('234234^.34534534')).to.equal('error');
      expect(validate.coords('14539085+425342534.5')).to.equal('error');
    });
    it('should block coordinates without proper precision', () => {
      expect(validate.coords('239')).to.equal('error');
      expect(validate.coords('239.3')).to.equal('error');
      expect(validate.coords('239.34')).to.equal('error');
      expect(validate.coords('.335')).to.equal('error');
    });
  });
  describe('NonEmpty Validator', () => {
    it('should allow nonempty strings', () => {
      expect(validate.nonEmpty('a')).to.equal(undefined);
      expect(validate.nonEmpty('sdfsdfsdfsf')).to.equal(undefined);
    });
    it('should block empty string', () => {
      expect(validate.nonEmpty('')).to.equal('error');
    });
    it('should block null value', () => {
      expect(validate.nonEmpty(null)).to.equal('error');
    });
  });
});
