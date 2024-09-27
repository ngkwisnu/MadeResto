const remove_product_function =
  (productService, createResponse) => async (req, res) => {
    const removeProduct = await productService(req.params);
    return createResponse(removeProduct);
  };

export default remove_product_function;
