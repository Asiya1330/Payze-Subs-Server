const Package = require("../models/Package");
const { validatePackage } = require("../../utils/validation");
const BaseController = require("./BaseController");

class PackageController extends BaseController {
  constructor() {
    super(Package, validatePackage);
  }
}

module.exports = new PackageController();
