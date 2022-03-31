import { Exclude } from "class-transformer";
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
  id: string;

  @Column()
  email: string;

  @Column({ select: false })
  password?: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ type: "date" })
  birthDate: string;

  @Exclude()
  @Column({ default: false, nullable: true })
  isAdm: boolean;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default User;
