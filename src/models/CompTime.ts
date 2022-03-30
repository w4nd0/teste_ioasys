import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./User";

@Entity("comp_time")
export class CompTime {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "date" })
  date!: Date;

  @Column()
  quantity!: number;

  @Column()
  authorized!: boolean;

  @Column()
  withdrawn!: boolean;

  @CreateDateColumn()
  createdOn!: Date;

  @UpdateDateColumn()
  updatedOn!: Date;

  @Column()
  userId!: string;

  @ManyToOne(() => User)
  user!: User;
}

export default CompTime;
