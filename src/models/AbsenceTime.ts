import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./User";

@Entity("absence_time")
export class AbsenceTime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: Date;

  @Column()
  quantity: number;

  @Column({ default: false })
  medical: boolean;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  user: User;
}

export default AbsenceTime;
