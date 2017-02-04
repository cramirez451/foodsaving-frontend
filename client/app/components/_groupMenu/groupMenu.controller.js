class GroupMenuController {
  constructor($document, $mdDialog, $state, Group, CurrentGroup) {
    "ngInject";
    Object.assign(this, {
      $document,
      $mdDialog,
      $state,
      Group,
      groups: [],
      activeGroup: CurrentGroup.value
    });
  }

  openMenu($mdOpenMenu) {
    this.Group.listMy().then((data) => {
      this.groups = data;
    });
    $mdOpenMenu();
  }

  openJoinGroupDialog($event) {
    this.$mdDialog.show({
      parent: this.$document.body,
      targetEvent: $event,
      template: "<join-group></join-group>"
    }).then((groupId) => {
      this.$state.go("group.groupDetail", { groupId });
    });
  }
}

export default GroupMenuController;
