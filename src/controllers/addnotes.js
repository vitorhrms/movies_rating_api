import addNotesServices from '../services/addnotes.js';

const addNotes = async (request, reply) => {
  const title = request.body.title;
  const description = request.body.description;
  const rating = request.body.rating;
  const avatar = request.body.avatar;

  try {
    const response = await addNotesServices.addNotesQuery(title, description, rating, avatar);
    reply.status(200).send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export default { addNotes };
