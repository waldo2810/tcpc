/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.renameColumn('users', 'socialProfile', 'social_profile');
    pgm.renameColumn('users', 'lastLogin', 'last_login');
    pgm.renameColumn('users', 'createdAt', 'created_at');
    pgm.renameColumn('users', 'userRole', 'user_role');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => { };
