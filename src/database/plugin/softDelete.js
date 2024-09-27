const softDelete = (schema) => {
  schema.pre(["countDocument", "find", "findOne"], function () {
    this.where({ deleted_at: null });
  });
};

export default softDelete;
