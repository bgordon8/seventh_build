import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table: any) => {
    table.uuid('id').primary().unique().notNullable();
    table.text('email').unique().notNullable();
    table.text('username').unique().notNullable();
    table.text('password').unique().notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
