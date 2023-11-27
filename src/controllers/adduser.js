import bcrypt from 'bcrypt'
import addUserServices from '../services/adduser.js';

const addUser = async (request, reply) => {
  const saltRounds = 10;

  const name = request.body.name;
  const email = request.body.email;
  let pass = request.body.pass;
  const avatar = request.body.avatar;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(pass, salt, function(err, hash) {
        pass = hash
    });
  });

  try {
    const response = await addUserServices.addUserQuery(name, email, pass, avatar);
    reply.status(200).send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
};

export default { addUser };
