const exesAndOhs = require('./exes-and-ohs');

describe('exesAndOhs', () => {
  it('should return true when given not string', () => {
    expect(exesAndOhs(true)).toBe(true);
  });
  it('should return true when given ""', () => {
    expect(exesAndOhs('xo')).toBe(true);
  });
  it('should return true when given "xo"', () => {
    expect(exesAndOhs('...')).toBe(true);
  });
  it('should return false when given "xp"', () => {
    expect(exesAndOhs('xp')).toBe(false);
  });
  it('should return true when given "ooxx"', () => {
    expect(exesAndOhs('ooxx')).toBe(true);
  });
  it('should return true when given "XxOOO"', () => {
    expect(exesAndOhs('XxOOO')).toBe(false);
  });
  it('should return true when given "Xo"', () => {
    expect(exesAndOhs('Xo')).toBe(true);
  });
  it('should return true when given "zpzpzpp"', () => {
    expect(exesAndOhs('zpzpzpp')).toBe(true);
  });
});
