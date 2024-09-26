const softDelete = (schema) => {
  schema.pre(["countDocument", "find", "fineOne"], function () {
    this.where({ deleted_at: null });
  });
};

export default softDelete;
