const MusicService = {
  //relevant
  getMusic(db) {
    return db
      .select('*')
      .from('music');
  },
  getMusicById(db, Music_id) {
    return db
      .select('*')
      .from('music')
      .where('music.id', Music_id)
      .first();
  },
  //relevant
  insertMusic(db, newMusic) {
    return db
      .insert(newMusic)
      .into('music')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  //relevant
  updateMusic(db, music_id, newMusic) {
    return db('Music')
      .update(newMusic, returning = true)
      .where({
        id: music_id
      })
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  //relevant
  deleteMusic(db, music_id) {
    return db('music')
      .delete()
      .where({
        'id': music_id
      });
  }
};

module.exports = MusicService;