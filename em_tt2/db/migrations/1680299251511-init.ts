import { MigrationInterface, QueryRunner } from "typeorm";

export class init1680299251511 implements MigrationInterface {
    name = 'init1680299251511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS users ( id serial PRIMARY KEY, "firstName" character varying, "lastName" character varying, age date, gender character varying, problems boolean )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
