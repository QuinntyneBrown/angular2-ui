describe("flipCardBack", () => {

    var flipCardBackComponent;
    var $compile;
    var $rootScope;

    beforeEach(() => {
        angular.mock.module("app.flipCardBack");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        flipCardBackComponent = $controller("flipCardBackComponent");
    }));

    it("should compile", () => {
        var element = $compile("<flip-card-back></flip-card-back>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(flipCardBackComponent).toBeDefined();
    });
})
