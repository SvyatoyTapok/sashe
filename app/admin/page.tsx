"use client";
import { useState } from 'react';
import { useDeleteImageMutation, useGetAllGalleryQuery, useUploadImageMutation } from '../Store/pricesSlice';
import styles from './styles.module.css'
import Image from 'next/image';
import Link from "next/link";

export default function AdminPage() {
    const [file] = useState<File | null>(null)
    console.log(file)
    const logout = () => {
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        window.location.href = "/login";
    };

    const { data: images, error, isLoading } = useGetAllGalleryQuery({});
    const [deleteImage] = useDeleteImageMutation();
    const [uploadImage] = useUploadImageMutation();
    const handleChange = (e: File | null) => {
        if (e) {
            uploadImage(e).then(() => {
            }).catch(error => {
                console.error('Ошибка при загрузке изображения:', error);
            });
            window.location.reload();
        }
    }
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки галереи</p>;

    const imagesWithId = images.map((image: string, index: number) => ({
        id: index + 1,
        image: image,
    }));
    const handleDelete = async (image: string) => {
        await deleteImage(image);
        window.location.reload();
    }
    const handleShowImage = () => {

    }
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Добро пожаловать в админку!</h1>
            <div className={styles.imagesBlock}>
                <div>
                    <input onChange={(e) => handleChange(e.target.files ? e.target.files[0] : null)} accept="image/*" type="file" />
                    {file && <p>Выбран файл: {file.name}</p>}
                </div>
                {imagesWithId.map((image: { id: number, image: string }) => (
                    <div key={image.id} className={styles.imageContainer}>
                        <Link target="_blank" href={`http://localhost:4300/images/gallery/${image.image}`}>
                            <Image
                                onClick={handleShowImage}
                                priority={true}
                                src={`http://localhost:4300/images/gallery/${image.image}`}
                                alt="image"
                                width={400}
                                height={400}
                            />
                        </Link>
                        <div onClick={() => handleDelete(image.image)} className={styles.deleteButton}>Удалить</div>
                    </div>
                ))}
            </div>
            <button onClick={logout} className={styles.button}>
                Выйти
            </button>
        </div>
    );
}