const instance = require('./stringLength');

describe('string methods', () => {
    test('returns the character count of the string', () => {
        expect(instance.reverseString('test')).toBe('tset');
      });

      test('returns the character count of the string', () => {
        expect(instance.stringLength('test')).toBe('The string length is below or equal to ten');
      });

      test('check capitalised', () => {
        expect(instance.capitalize('test')).toBe('Test');
      });

      test('chech if the length is less than or equal to 10') {
        expect(() => instance.stringLength(11)).toThrow(Error);
      };
});


