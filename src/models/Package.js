const BaseModel = require('./BaseModel');
const PackageModel = require('./PackageModel')

class Package extends BaseModel {
  constructor() {
    super(PackageModel);
  }

}

module.exports = new Package();
