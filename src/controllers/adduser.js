import addUserServices from '../services/adduser.js';

const addUser = async (request, reply) => {
  const name = request.body.name;
  const email = request.body.email;
  const pass = request.body.pass;
  const avatar = request.body.avatar;

  try {
    const response = await addUserServices.addUserQuery(name, email, pass, avatar);
    reply.status(200).send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export default { addUser };
