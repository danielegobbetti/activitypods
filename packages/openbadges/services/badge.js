const { ControlledContainerMixin } = require('@semapps/ldp');
module.exports = {
  name: 'openbadges.badge',
  mixins: [ControlledContainerMixin],
  settings: {
    path: '/badges',
    acceptedTypes: [
      'obi:BadgeClass',
    ],
    dereference: [],
    permissions: {},
    newResourcesPermissions: {},
  }
};
