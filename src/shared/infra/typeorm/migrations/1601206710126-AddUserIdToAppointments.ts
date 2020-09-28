import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AddUserIdToAppointments1601206710126 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'fk_appointment_user',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'fk_appointment_user');

    await queryRunner.dropColumn('appointments', 'user_id');
  }

}
