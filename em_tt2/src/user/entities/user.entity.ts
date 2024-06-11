import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'date' })
  age: Date;

  @Column({ type: 'varchar' })
  gender: string;

  @Column({ type: 'boolean' })
  problems: boolean;
}
