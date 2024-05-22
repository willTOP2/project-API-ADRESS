import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateMunicipio1643463011005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'municipio',
        columns: [
          {
            name: 'codigo_municipio',
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
      'municipio',
      new TableColumn({
        name: 'codigo_uf',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'municipio',
      new TableForeignKey({
        name: 'codigo_uf',
        columnNames: ['codigo_uf'],
        referencedTableName: 'estados',
        referencedColumnNames: ['codigo_uf'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('municipio');
  }
}
