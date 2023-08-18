class BaseController {
  constructor(Model, validationSchema) {
    this.Model = Model; //table model
    this.validationSchema = validationSchema;
  }

  catchError = async (res, error, errorMessage) => {
    console.error(error);
    res.status(500).json({ error: errorMessage || "An error occurred." });
  };

  validateData = async (data, res) => {
    const { error } = this.validationSchema(data);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return false;
    }
    return true;
  };

  create = async (req, res) => {
    const data = req.body;
    if (!(await this.validateData(data, res))) return;
    try {
      const newItem = await this.Model.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      this.catchError(res, error, "Failed to create item.");
    }
  };

  delete = async (req, res) => {
    try {
      const id = req.params.id;
      const deletedRows = await this.Model.destroy({
        where: { id },
      });
      if (deletedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } catch (error) {
      this.catchError(res, error, "Failed to delete item.");
    }
  };

  update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    try {
      const updatedRows = await this.Model.update(id, data);
      if (updatedRows > 0) {
        res.status(200).json({ message: "Item updated successfully." });
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } catch (error) {
      this.catchError(res, error, "Failed to update item.");
    }
  };

  getById = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await this.Model.findByPk(id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ error: "Item not found." });
      }
    } catch (error) {
      this.catchError(res, error, "Failed to retrieve item.");
    }
  };

  getAll = async (req, res) => {
    try {
      const items = await this.Model.getAll(req, res);
      res.status(200).json(items);
    } catch (error) {
      this.catchError(res, error, "Failed to retrieve items.");
    }
  };
}

module.exports = BaseController;
