import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateBairro1643543733217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bairro',
        columns: [
          {
            name: 'codigo_bairro',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'int',
          },
        ],
      }),
    );
    await queryRunner.addColumn(
      'bairro',
      new TableColumn({
        name: 'codigo_municipio',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'bairro',
      new TableForeignKey({
        name: 'codigo_municipio',
        columnNames: ['codigo_municipio'],
        referencedTableName: 'municipio',
        referencedColumnNames: ['codigo_municipio'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bairro');
  }
}
