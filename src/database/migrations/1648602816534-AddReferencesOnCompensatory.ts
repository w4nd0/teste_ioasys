import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddReferencesOnCompensatory1648602816534
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      "comp_time",
      new TableForeignKey({
        name: "UserFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey("comp_time", "UserFK");
  }
}
