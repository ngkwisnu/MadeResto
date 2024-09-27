const detail_product_function =
  (productService, createResponse) => async (req, res) => {
    const detailProduct = await productService(req.params);
    return createResponse(detailProduct);
  };

export default detail_product_function;
