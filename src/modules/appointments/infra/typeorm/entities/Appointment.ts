import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Appointment;
