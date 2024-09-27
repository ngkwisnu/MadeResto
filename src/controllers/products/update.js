const update_product_function =
  (productService, createResponse) => async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const updateDataProduct = await productService({ id, data: body });
    return createResponse(updateDataProduct);
  };

export default update_product_function;
