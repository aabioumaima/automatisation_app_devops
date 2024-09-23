import { expect } from 'chai'; // Use named import

describe('Exemple de test', function() {
  it('devrait additionner correctement deux nombres', function() {
    const somme = 1 + 1;
    expect(somme).to.equal(2);
  });
});

