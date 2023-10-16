module.exports = {
  multipleMongooseToObject: (list) => {
    return list.map((item) => item.toObject());
  },
  mogooseToObject: (obj) => (obj ? obj.toObject() : obj),
};
