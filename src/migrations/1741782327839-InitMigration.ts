import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1741782327839 implements MigrationInterface {
    name = 'InitMigration1741782327839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "verificationCode" character varying, "otpExpiresAt" TIMESTAMP, "isVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
