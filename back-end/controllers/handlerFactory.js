const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc)
      return next(
        new AppError("Couldn't create document please try again", 400)
      );
    res.status(200).json({
      status: "success",
      data: {
        tour: doc,
      },
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!document) {
      return next(new AppError("Couldn't update the document", 400));
    }
    res.status(200).json({
      status: "success",
      data: document,
    });
  });
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: null,
    });
    if (!document) {
      return next(new AppError("Couldn't delete the document", 400));
    }
  });
exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findOne({ _id: id });
    if (!doc)
      return next(
        new AppError("No document with that id, please try again", 404)
      );
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    //execute query;

    //const doc = await features.query.explain(); use this for indexing
    const doc = await features.query;

    //send response
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
