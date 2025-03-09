"use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    useDeleteImageMutation,
    useGetAllGalleryQuery,
    useUploadImageMutation,
    useGetPricesQuery,
    useDeletePriceMutation
} from '../Store/pricesSlice';
import styles from './styles.module.css'
import Image from 'next/image';
import Link from "next/link";
import AdminPopup from '../Components/AdminPopup/AdminPopup';
import { openModal } from '../Store/modalSlice';

export default function AdminPage() {

    const dispatch = useDispatch();
    const { data: prices = [] } = useGetPricesQuery("Маникюр");

    const [file] = useState<File | null>(null)
    const logout = () => {
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        window.location.href = "/login";
    };

    const { data: images, error, isLoading } = useGetAllGalleryQuery({});
    const [deletePrice] = useDeletePriceMutation();
    const [deleteImage] = useDeleteImageMutation();
    const [uploadImage] = useUploadImageMutation();
    const handleDeletePrice = async (price: number) => {
        await deletePrice(price)
        window.location.reload();
    }

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
    return (
        <div className={styles.container}>
            <AdminPopup />
            <h1 className={styles.mainText}>Добро пожаловать в админку!</h1>
            <div>
                <input onChange={(e) => handleChange(e.target.files ? e.target.files[0] : null)} accept="image/*" type="file" />
                {file && <p>Выбран файл: {file.name}</p>}
            </div>
            <div className={styles.imagesBlock}>
                {imagesWithId.map((image: { id: number, image: string }) => (
                    <div key={image.id} className={styles.imageContainer}>
                        <Link target="_blank" href={`http://localhost:4300/images/gallery/${image.image}`}>
                            <Image
                                priority={true}
                                src={`http://localhost:4300/images/gallery/${image.image}`}
                                alt="image"
                                width={240}
                                height={240}
                            />
                        </Link>
                        <div onClick={() => handleDelete(image.image)} className={styles.deleteButton}>Удалить</div>
                    </div>
                ))}
            </div>

            <div className={styles.bookingsContainer}>
                {prices.map((priceItem: { id: number, name: string, cost: number }) => (
                    <div
                        className={styles.priceItem}
                        key={priceItem.id}>
                        {`${priceItem.name}, ${priceItem.cost}`}
                        <div style={{ backgroundColor: "orange" }} className={styles.deleteButton}>Редактировать</div>
                        <div onClick={() => handleDeletePrice(priceItem.id)} className={styles.deleteButton}>Удалить</div>
                    </div>
                ))}
                <div onClick={() => dispatch(openModal())} style={{ backgroundColor: 'lightgreen', display: 'flex' }} className={styles.deleteButton}>
                    Создать
                </div>
            </div>
            <button onClick={logout} className={styles.button}>
                Выйти
            </button>
        </div>
    );
}