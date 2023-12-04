import connections from "../connections/connectionsDB.js";

const createMovie = async (title, description, rating, idUser) => {
  try {
    const newMovie = await connections.query(`
      INSERT INTO 
        movies (title, description, rating, user_id, created_at) 
      VALUES ('${title}', '${description}', '${rating}', '${idUser}', GETDATE())
    `);

    return newMovie;
  } catch (e) {
    console.log(e);
    throw new Error("error create movie.");
  }
};

export default { createMovie };