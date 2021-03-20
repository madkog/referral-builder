// item.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'referral' })
export class Referral {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  givenName: string;

  @Column({ type: 'varchar', length: 300 })
  surname: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  phone: string;

  @Column({ type: 'varchar', length: 300 })
  homeName: string;

  @Column({ type: 'varchar', length: 300 })
  street: string;

  @Column({ type: 'varchar', length: 300 })
  suburb: string;

  @Column({ type: 'varchar', length: 10 })
  state: string;

  @Column({ type: 'varchar', length: 4 })
  postcode: string;

  @Column({ type: 'varchar', length: 300 })
  country: string;

  @Column({ type: 'varchar', length: 300 })
  avatar: string;
}
