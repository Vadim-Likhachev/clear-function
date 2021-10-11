import { test } from '@jest/globals';
import indicator from '../app';

test('should show: healthy', () => {
  const expected = 'healthy';
  const received = indicator({ name: 'Маг', health: 90 });

  expect(received).toBe(expected);
});

test('should show: wounded', () => {
  const expected = 'wounded';
  const received = indicator({ name: 'Маг', health: 40 });

  expect(received).toBe(expected);
});

test('should show: critical', () => {
  const expected = 'critical';
  const received = indicator({ name: 'Маг', health: 10 });

  expect(received).toBe(expected);
});
