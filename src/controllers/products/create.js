const create_product_function =
  (productService, createResponse) => async (req, res) => {
    const createProduct = await productService(req);
    return createResponse(createProduct);
  };

export default create_product_function;
