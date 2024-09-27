const pagination = async (Model, query) => {
  const page = query.page || 1;
  const limit = query.limit || 10;

  const startIndex = (page - 1) * limit;
  const total = await Model.countDocuments();

  const data = await Model.find().skip(startIndex).limit(limit);
  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
    data,
  };
};

export default pagination;
