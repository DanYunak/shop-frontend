import { FC } from "react";
import { ProductType } from '../../redux/types/Product.type';
import { useAppDispatch } from '../../redux/store';
import './Product.scss'
import { actions } from '../../redux/model/productActions';
import DeleteIcon from '@mui/icons-material/Delete'

type PropsType = {
    product: ProductType
    handleDeleteProduct: (product: ProductType) => void
}

export const Product: FC<PropsType> = ({ product, handleDeleteProduct }) => {
    const { imageUrl, name } = product

    const dispatch = useAppDispatch()

    const handleDeleteClick = () => {
        handleDeleteProduct(product)
    }

    return (
        <div className='product'>
            <div className='product__img'>
                <img src={imageUrl} alt='product img' width='150' height='150' />
            </div>
            <div className='product__name'>{name}</div>
            <div className='delete__product'>
                <DeleteIcon onClick={handleDeleteClick} />
            </div>
        </div>
    )
}