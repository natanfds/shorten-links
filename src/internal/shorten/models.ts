import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
class ModelShortenedUrlInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    url: string;

    @Column()
    short_url_param: string;

    @Column()
    @DeleteDateColumn()
    deleted_at: Date;
}

export default ModelShortenedUrlInfo;
