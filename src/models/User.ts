import{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,


}from "typeorm";



@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid") 
    id:string;

    @Column()
    nome:string;

    @Column()
    email:string;

    @Column({select: false})
    password:string;

    @CreateDateColumn()
    create_at: Date;
   
    @UpdateDateColumn()
    updated_at: Date;    
}

export default User;