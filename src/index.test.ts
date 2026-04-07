import {
  describe, expect, it, vi,
} from 'vitest';

import { description, name, version } from '../package.json';
import { murph } from './index';

describe('murph function', () => {
  it('should log the correct message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    murph();
    expect(consoleSpy).toHaveBeenCalledWith(`${name}(${version})`, description);
  });
});
