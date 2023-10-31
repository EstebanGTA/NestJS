/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./categories.entities";

@Entity('products', { schema: 'ventas' })

export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updateAt: Date;
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @ManyToOne(() => CategoryEntity, category => category.products)
    category: CategoryEntity;

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'product name'
    })
    title: string;

    @Column('number', {
        name: 'price',
        nullable: false,
        comment: 'product price'
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product name'
    })
    descripcion: string;
    password: any;
    email: any;
    nombre: any;
    correo_electronico: any;
    tokenAutenticacion: string;

    // @BeforeInsert()
    // @BeforeUpdate()
    // async setTitle() {
    //     if (!this.title) {
    //         return;
    //     }
    //     this.title = this.title.toUpperCase();
    // }

    // @BeforeInsert()
    // @BeforeUpdate()
    // async setDescripcion() {
    //     if (!this.descripcion) {
    //         return;
    //     }
    //     this.descripcion = this.descripcion.toLowerCase();
    // }

    // @BeforeInsert()
    // @BeforeUpdate()
    // async setEmail() {
    //     if (!this.email) {
    //         return;
    //     }
    //     this.email = this.email.toUpperCase();
    // }

    // @BeforeInsert()
    // @BeforeUpdate()
    // async normalizePhoneNumber() {
    // if (!this.phoneNumber) {
    // return;
    // }
    // this.phoneNumber = this.phoneNumber.replace(/\s/g, &#39;&#39;);
    // }

    // @BeforeInsert()
    // @BeforeUpdate()
    // async normalizeUsername() {
    // if (!this.username) {
    // return;
    // }
    // this.username = this.username.replace(/\s/g, &#39;&#39;).toLowerCase();
    // }
}
