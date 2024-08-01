import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test getFullYear', () => {
  it('getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });
})

describe('Test getFooterCopy', () => {
  it('getFooterCopy true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('getFooterCopy false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
})

describe('Test getLatestNotification', () => {
  it('getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
})
