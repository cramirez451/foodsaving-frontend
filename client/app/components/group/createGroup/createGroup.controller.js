class CreateGroupController {
  constructor($state, Group) {
    "ngInject";
    Object.assign(this, {
      $state,
      Group,
      groupData: {}
    });
  }

  createGroup() {
    this.Group.create(this.groupData).then((data) => {
      this.$state.go("group.groupDetail", { groupId: data.id });
    }).catch((error) => {
      this.error = error.data;
    });
  }
}

export default CreateGroupController;
