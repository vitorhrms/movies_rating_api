import AddNotes from '../controllers/addnotes.js';
import AddUser from '../controllers/adduser.js';

const Routes = async (fastify, options) => {
  fastify.post('/addnotes', AddNotes.addNotes);
  fastify.post('/adduser', AddUser.addUser);
};

export default Routes;
