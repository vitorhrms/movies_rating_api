import localDB from '../connections/localDB.js';

const addNotesQuery = async (title, description, rating, avatar) => {
  try {
    const notesadd = await localDB.query(`
      INSERT INTO 
        movie_notes (
          movie_title,
          movie_description, 
          user_rating, 
          user_id, 
          created_at, 
          updated_at
        ) 
      VALUES (
          '${title}', 
          '${description}', 
          '${rating}', 
          (select id from users where avatar = '${avatar}'),
          GETDATE(), 
          GETDATE()
        )
    `);
    return notesadd[0];
  } catch (e) {
    throw new Error('Failed add user!', e);
  }
};

export default { addNotesQuery };
