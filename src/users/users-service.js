const UsersService = {
    getUsers(db) {
        return db
            .select('*')
            .from('users');
    },
    getUsersById(db, user_id) {
        return db
            .select('*')
            .from('users')
            .where('pancake.id', user_id)
            .first();
    },
    insertUsers(db, newUser) {
        return db
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0];
            });
    },
    updateUsers(db, user_id, newUser) {
        return db('users')
            .update(newUser, returning = true)
            .where({
                id: user_id
            });
    }
}