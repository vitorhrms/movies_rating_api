import localDB from '../connections/localDB.js';

const addUserQuery = async (name, email, pass, avatar) => {
  try {
    const useradd = await localDB.query(`
      INSERT INTO 
        users (
          email, 
          password, 
          avatar, 
          created_at, 
          updated_at, 
          name
        )
      VALUES (
          '${email}', 
          '${pass}', 
          '${avatar}',
          GETDATE(), 
          GETDATE(), 
          '${name}'
        )
    `);
    return useradd[0];
  } catch (e) {
    throw new Error('Failed add user!', e);
  }
};

export default { addUserQuery };
