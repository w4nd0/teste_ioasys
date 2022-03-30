import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddReferencesOnAbsence1648602723501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      "absence_time",
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
    await queryRunner.dropForeignKey("absence_time", "UserFK");
  }
}
