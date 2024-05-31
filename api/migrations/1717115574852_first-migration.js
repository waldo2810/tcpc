exports.up = (pgm) => {
    pgm.createType('UserRole', ['Administrator', 'Viewer', 'Moderator']);
    pgm.createType('UserStatus', ['Active', 'Inactive']);

    pgm.createTable('users', {
        id: 'id',
        name: { type: 'varchar(255)', notNull: true },
        pfp: { type: 'text' },
        socialProfile: { type: 'text', notNull: false },
        promote: { type: 'boolean', notNull: true, default: pgm.func('false') },
        rating: { type: 'float8', notNull: true },
        lastLogin: { type: 'timestamp', notNull: true },
        createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    });
};