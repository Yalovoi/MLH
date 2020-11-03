const sel = require ('../../data/selectors.json');

describe('Checking the main functionality', function () {

describe('Inputs are displayed', function () {
    it('TC-014 Name ', function () {
        browser.url('');
        const name = $(sel.name).isDisplayed();
        expect(name).toEqual(true);
     });
  });

});