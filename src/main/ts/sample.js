var Sample = (function () {
    function Sample() {
        this.name = "takashi";
        this.age = 20;
    }
    Sample.prototype.echo = function () {
        return "Hello " + this.name + " !!";
    };
    return Sample;
})();
