import {MigrationInterface, QueryRunner} from "typeorm";

export class correctiongField1612402076844 implements MigrationInterface {
    name = 'correctiongField1612402076844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `create_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `create_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

}
