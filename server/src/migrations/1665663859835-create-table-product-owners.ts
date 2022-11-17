import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableProductOwners1665663859835 implements MigrationInterface {
    name = 'createTableProductOwners1665663859835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_owners" ("id" SERIAL NOT NULL, "capacity" integer NOT NULL, "userId" integer, CONSTRAINT "REL_dec22160fdd5956fa564595b37" UNIQUE ("userId"), CONSTRAINT "PK_48fe8a163549325529f0ddc178a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_owners" ADD CONSTRAINT "FK_dec22160fdd5956fa564595b375" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_owners" DROP CONSTRAINT "FK_dec22160fdd5956fa564595b375"`);
        await queryRunner.query(`DROP TABLE "product_owners"`);
    }

}
