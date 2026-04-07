import {
  describe, expect, it, vi,
} from 'vitest';

import { murph } from './index';

describe('murph function', () => {
  it('should log the correct message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    murph();
    expect(consoleSpy).toHaveBeenCalledWith('@sobird/murph(1.3.1)', 'A pristine TypeScript template for rapid project inception.');
  });
});
