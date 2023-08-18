
class BaseModel {
  constructor(Model) {
    this.Model = Model;
  }

  create = async (payload) => {
    try {
      const data = await this.Model.create(payload);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  update = async (id, payload) => {
    try {
      const [updatedRows, updatedData] = await this.Model.update(payload, {
        where: { id },
        returning: true
      });
      return updatedData;
    } catch (error) {
      console.error(error);
    }
  };

  delete = async (id) => {
    try {
      const deletedRows = await this.Model.destroy({
        where: { id },
      });
      return deletedRows;
    } catch (error) {
      console.error(error);
    }
  };

  getAll = async () => {
    try {
      const data = await this.Model.findAll();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  get(id) {
    // Implement SQL query to fetch data from the table
  }
}

module.exports = BaseModel;
