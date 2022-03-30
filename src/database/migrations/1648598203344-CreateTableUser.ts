import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1648598203344 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          { name: "email", type: "varchar", isUnique: true },
          { name: "password", type: "varchar" },
          { name: "name", type: "varchar" },
          { name: "lastname", type: "varchar" },
          { name: "birthDate", type: "varchar" },
          { name: "isAdm", type: "boolean" },
          { name: "createdOn", type: "timestamp", default: "now()" },
          { name: "updatedOn", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("users");
  }
}
