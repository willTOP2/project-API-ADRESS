import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateEndereco1643544396110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',
        columns: [
          {
            name: 'codigo_endereco',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome_rua',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'int',
          },
          {
            name: 'complemento',
            type: 'varchar',
          },
          {
            name: 'cep',
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
      'endereco',
      new TableColumn({
        name: 'codigo_bairro',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'endereco',
      new TableForeignKey({
        name: 'codigo_bairro',
        columnNames: ['codigo_bairro'],
        referencedTableName: 'bairro',
        referencedColumnNames: ['codigo_bairro'],
      }),
    );

    await queryRunner.addColumn(
      'endereco',
      new TableColumn({
        name: 'codigo_pessoa',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'endereco',
      new TableForeignKey({
        name: 'codigo_pessoa',
        columnNames: ['codigo_pessoa'],
        referencedTableName: 'pessoa',
        referencedColumnNames: ['codigo_pessoa'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bairro');
  }
}
