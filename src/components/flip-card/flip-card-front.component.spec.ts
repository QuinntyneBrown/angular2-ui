describe("flipCardFront", () => {

    var flipCardFrontComponent;
    var $compile;
    var $rootScope;

    beforeEach(() => {
        angular.mock.module("app.flipCardFront");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        flipCardFrontComponent = $controller("flipCardFrontComponent");
    }));

    it("should compile", () => {
        var element = $compile("<flip-card-front></flip-card-front>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(flipCardFrontComponent).toBeDefined();
    });
})
