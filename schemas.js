class Organisation {}
Organisation.schema = {
  name: 'Organisation',
  properties: {
    id: 'string',
    name: 'string',
    email: 'string',
    password: 'string',
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class User {}
User.schema = {
  name: 'User',
  properties: {
    id: 'string',
    email: 'string',
    password: 'string',
    organisation_id: 'string',
    isDeleted: {
      type: 'bool',
      default: false
    },
    isOrgAccount: {
      type: 'bool',
      default: false
    }
  }
};


class LocalUser {}
LocalUser.schema = {
  name: 'LocalUser',
  properties: {
    id: 'string',
    email: 'string',
    roles: 'string',
    isDeleted: {
      type: 'bool',
      default: false
    },
    isOrgAccount: {
      type: 'bool',
      default: false
    }
  }
};

class Project {}
Project.schema = {
  name: 'Project',
  properties: {
    id: 'string',
    name: 'string',
    createdBy: 'string',
    createdAt: 'date',
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class Template {}
Template.schema = {
  name: 'Template',
  properties: {
    id: 'string',
    treeData: 'string',
    createdBy: 'string',
    createdAt: 'date',
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

export {
  Organisation,
  User,
  Project,
  Template,
  LocalUser
}