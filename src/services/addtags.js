import localDB from '../connections/localDB.js';

const addTagsQuery = async (title, tags, movie_id) => {
  try {
    const addmovietag = await localDB.query(`
        INSERT INTO movie_tag (
            id_tag,
            movie_id
            title,
            tags
        )
        VALUES (
            '${movie_id}',
            '${title}', 
            '${tags}', 
        )
    `);
    return addmovietag[0];
  } catch (e) {
    throw new Error('Failed add tags!', e);
  }
};

export default { addTagsQuery };
