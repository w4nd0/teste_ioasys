import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableAbsence1648598961736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "absence_time",
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
          { name: "medical", type: "boolean", default: false },
          { name: "userId", type: "uuid" },
          { name: "createdOn", type: "timestamp", default: "now()" },
          { name: "updatedOn", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("absence_time");
  }
}
