import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "category",
  timestamps: false, //createdAt, updatedAt - не буде
})
export class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  title!: string;
}
