const list_product_function =
  (productService, createResponse) => async (req, res) => {
    const listProductData = await productService(req);
    return createResponse(listProductData);
  };

export default list_product_function;
