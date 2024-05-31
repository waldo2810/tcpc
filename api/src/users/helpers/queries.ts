export const userQueries = {
  selectAll: 'SELECT * FROM users',
  selectById: 'SELECT * FROM users WHERE id = $1',
  save: 'INSERT INTO users (name, pfp, social_profile, promote, rating, last_login, created_at, user_role, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
  update:
    'UPDATE users SET name = $1, pfp = $2, social_profile = $3, promote = $4, rating = $5, last_login = $6, created_at = $7, user_role = $8, status = $9 WHERE id = $10 RETURNING *',
  delete: 'DELETE FROM users WHERE id = $1 RETURNING *',
};
