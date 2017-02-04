import CreateGroupModule from "./createGroup";

const { module } = angular.mock;

describe("CreateGroup", () => {
  beforeEach(module(CreateGroupModule));

  let $log;
  beforeEach(inject(($injector) => {
    $log = $injector.get("$log");
    $log.reset();
  }));
  afterEach(() => {
    $log.assertEmpty();
  });

  describe("Module", () => {
    it("is named createGroup", () => {
      expect(CreateGroupModule).to.equal("createGroup");
    });
  });

  describe("Controller", () => {
    let $componentController, $httpBackend, $state;
    beforeEach(inject(($injector) => {
      $componentController = $injector.get("$componentController");
      $httpBackend = $injector.get("$httpBackend");
      $state = $injector.get("$state");
      sinon.stub($state, "go");
    }));

    afterEach(() => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it("creates group", () => {
      let $ctrl = $componentController("createGroup", {});
      $ctrl.groupData.name = "blabla";
      $ctrl.createGroup();
      $httpBackend.expectPOST("/api/groups/", {
        name: "blabla"
      }).respond(201, { id: 987 });
      $httpBackend.flush();
      expect($state.go).to.have.been.calledWith("group.groupDetail", { groupId: 987 });
    });

    it("fails to create group", () => {
      let $ctrl = $componentController("createGroup", {});
      $ctrl.groupData.name = "blabla";
      $ctrl.createGroup();
      $httpBackend.expectPOST("/api/groups/", {
        name: "blabla"
      }).respond(400, "message");
      $httpBackend.flush();
      expect($ctrl.error).to.equal("message");
    });
  });
});
