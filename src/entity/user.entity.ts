import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  roles: string[];
}