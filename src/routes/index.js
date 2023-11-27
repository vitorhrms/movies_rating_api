import AddNotes from '../controllers/addnotes.js';
import AddUser from '../controllers/adduser.js';
import AddTags from '../controllers/addtags.js';

const Routes = async (fastify, options) => {
  fastify.post('/addnotes', AddNotes.addNotes);
  fastify.post('/adduser', AddUser.addUser);
  fastify.post('/addtags', AddTags.addTags);
};

export default Routes;
