import addTagServices from '../services/addtags.js';

const addTags = async (request, reply) => {
  const title = request.body.title;
  const tags = request.body.tags;
  const movie_id = request.body.movie_id;

  try {
    const response = await addTagServices.addTagsQuery(title, tags, movie_id);
    reply.status(200).send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export default { addTags };
