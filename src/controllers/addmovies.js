import serviceCreateMovie from "../service/createMovie.js";
import responseHandle from "../helpers/responseHandler.js";

const createMovie = async (request, reply) => {
  const title = request.body.title;
  const description = request.body.description
  const rating = request.body.rating

  try {
    await serviceCreateMovie.createMovie(title, description, rating, idUser);
    return responseHandle.sendSuccessReply(reply, "movie created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed to create movie");
  }
};

export default { createMovie };