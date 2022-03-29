import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column({ type: "date" })
  birthDate!: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ update: false })
  isAdm!: boolean;

  @CreateDateColumn()
  createdOn!: Date;

  @UpdateDateColumn()
  updatedOn!: Date;
}

export default User;
