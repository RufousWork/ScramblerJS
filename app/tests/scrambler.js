function removeWhitespace(string) {
    return string.replace(/\s+/g, '');
}

describe('scrambler tests', function(){
    beforeEach(function() {
        fixture.setBase('fixtures')
    });

    beforeEach(function(){
        this.sample = fixture.load('sample.html');
    });

    afterEach(function() {
        fixture.cleanup();
    });

    it('plays with the html fixture', function() {
        jasmine.clock().install();

        var runSpy = spyOn(scrambler._scrambler, "run").and.callThrough();
        var originalContent = removeWhitespace(this.sample[0].textContent);

        scrambler.scramble(this.sample[0], false);
        expect(runSpy.calls.count()).toEqual(1);

        jasmine.clock().tick(501);
        expect(runSpy.calls.count()).toEqual(3);

        expect(originalContent).not.toEqual(removeWhitespace(this.sample[0].textContent))

        jasmine.clock().uninstall();
    });

    it('defaults on body when calling the go function', function() {
        var scramblerSpy = spyOn(scrambler, "scramble");

        scrambler.go('en');

        expect(scramblerSpy.calls.count()).toEqual(1);
        expect(scramblerSpy).toHaveBeenCalledWith(document.querySelector('body'), true, undefined);
    });

    it('the go function accepts a custom element', function() {
        var scramblerSpy = spyOn(scrambler, "scramble");

        scrambler.go('en', '', this.sample[0]);

        expect(scramblerSpy.calls.count()).toEqual(1);
        expect(scramblerSpy).toHaveBeenCalledWith(this.sample[0], true, '');
    });

    it('stops the scrambling', function() {
        scrambler.scramble(this.sample[0], false);

        expect(scrambler._scrambler.running).toEqual(true);

        scrambler.stop();

        expect(scrambler._scrambler.running).toEqual(false);
    });

    it('restores the original content', function() {
        var originalContent = this.sample[0].innerHTML;

        jasmine.clock().install();

        scrambler.scramble(this.sample[0], false);

        jasmine.clock().tick(501);

        expect(originalContent).not.toEqual(this.sample[0].innerHTML);

        scrambler.restore();

        expect(originalContent).toEqual(this.sample[0].innerHTML);

        jasmine.clock().uninstall();
    });
});
