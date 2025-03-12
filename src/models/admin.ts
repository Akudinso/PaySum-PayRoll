import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("admin")
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  verificationCode: string;

  @Column({ type: "timestamp", nullable: true })
  otpExpiresAt: Date;

  @Column({ default: false })
  isVerified: boolean;
}
