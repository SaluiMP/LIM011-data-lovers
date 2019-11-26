// importamos la función `example`
import { filtraTipo } from '../src/data.js';

describe('filtrar por tipo', () => {
  it('debería ser una función', () => {
    expect(typeof filtraTipo).toBe('function');
  });
});
