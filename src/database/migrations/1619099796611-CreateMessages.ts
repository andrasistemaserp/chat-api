import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1619099796611 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "admin_id",
            type: "uuid",
            isNullable: true
          },
          {
            name: "user_id",
            type: "uuid"
          },
          {
            name: "text",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "fk_user",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",  //pode definir que pode ser uma coluna restrita, se tentar ser removido não vai permitir,
                                   //pode definir que vai ter um cascade, qdo vai remover tudo, inclusive as msg que o user_id tiver contido nela
                                   //neste caso definiremos o user_id como nulo            
            onUpdate: "SET NULL"                                   
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }

}
