export const userQueries = {
  selectAll: 'SELECT * FROM users',
  selectById: 'SELECT * FROM users WHERE id = $1',
  save: 'INSERT INTO users (name, pfp, social_profile, promote, rating, last_login, created_at, user_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
  update:
    'UPDATE users SET name = $1, pfp = $2, social_profile = $3, user_role = $4, status = $5 WHERE id = $6 RETURNING *',
  delete: 'DELETE FROM users WHERE id = $1 RETURNING *',
};
