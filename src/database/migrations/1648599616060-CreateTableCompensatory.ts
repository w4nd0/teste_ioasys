import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableCompensatory1648599616060
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "comp_time",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          { name: "date", type: "timestamp" },
          { name: "quantity", type: "int" },
          { name: "authorized", type: "boolean" },
          { name: "withdrawn", type: "boolean" },
          { name: "userId", type: "uuid" },
          { name: "createdOn", type: "timestamp", default: "now()" },
          { name: "updatedOn", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
