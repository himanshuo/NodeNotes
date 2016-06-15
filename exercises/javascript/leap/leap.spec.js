var Year = require('./leap');

describe('Leap year', function() {

    it('is not very common', function() {
        var year = new Year(2015);
        expect(year.isLeap()).toBe(false);
    });

    it('is introduced every 4 years to adjust about a day:2016', function() {
        var year = new Year(2016);
        expect(year.isLeap()).toBe(true);
    });

    it('is skipped every 100 years to remove an extra day:1980', function() {
        var year = new Year(1900);
        expect(year.isLeap()).toBe(false);
    });

    it('is reintroduced every 400 years to adjust another day:2000', function() {
        var year = new Year(2000);
        expect(year.isLeap()).toBe(true);
    });

    it('is not confounding with other Year variables: 1, 4', function() {
        var year1 = new Year(1);
        expect(year1.isLeap()).toBe(false);
        var year4 = new Year(4);
        expect(year4.isLeap()).toBe(true);

        expect(year1.isLeap()).toBe(false);
        expect(year4.isLeap()).toBe(true);
    });

    describe('Type of Leap year', function() {
        it('is undefined', function() {
            var year = new Year(undefined);
            expect(year.isLeap()).toBe(false);
        });

        it('is valid string', function() {
            var year = new Year("2000");
            expect(year.isLeap()).toBe(true);
        });

        it('is invalid string', function() {
            var year = new Year("dxbs");

            expect(year.isLeap()).toBe(false);
        });

        it('is boolean', function() {
            var year1 = new Year(true);
            var year2 = new Year(false);
            expect(year1.isLeap()).toBe(false);
            expect(year2.isLeap()).toBe(false);
        });

        it('is object', function() {
            var year = new Year({
                num: 4
            });
            expect(year.isLeap()).toBe(false);

        });

    });

    // Feel free to enable the following tests to check some more examples
    describe('Additional example of a leap year that', function() {

        it('is not a leap year:1978', function() {
            var year = new Year(1978);
            expect(year.isLeap()).toBe(false);
        });

        it('is a common leap year:1992', function() {
            var year = new Year(1992);
            expect(year.isLeap()).toBe(true);
        });

        it('is skipped every 100 years:2100', function() {
            var year = new Year(2100);
            expect(year.isLeap()).toBe(false);
        });

        it('is reintroduced every 400 years:400', function() {
            var year = new Year(2400);
            expect(year.isLeap()).toBe(true);
        });

    });

});
