import { MigrationInterface, QueryRunner } from "typeorm";

export class user1662620985785 implements MigrationInterface {
    name = 'user1662620985785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" ADD "status" boolean NOT NULL DEFAULT false`);
    }

}
