import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['short_url_param'])
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

    @Column({ unique: true })
    short_url_param: string;

    @Column()
    @DeleteDateColumn()
    deleted_at: Date;
}

export default ModelShortenedUrlInfo;
