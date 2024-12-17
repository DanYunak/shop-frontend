import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts, getIsCreateWindowOpen } from '../../redux/selectors/productSelectors';
import { useAppDispatch } from '../../redux/store';
import { actions } from '../../redux/model/productActions';
import AddBoxIcon from '@mui/icons-material/AddBox'
import { ProductType, FormDataType } from '../../redux/types/Product.type';
import { Product } from '../Product/Product';
import './Products.scss'
import { CreateProduct } from '../CreateProduct/CreateProduct';
import { DeleteProduct } from "../DeleteProduct/DeleteProduct";

export const Products: FC = () => {
    const [deletedProduct, setDeletedProduct] = useState<ProductType | null>(null)
    const [isDeleteProductWindowOpen, setIsDeleteProductWindowOpen] = useState(false)

    const products = useSelector(getAllProducts)

    const isCreateWindowOpen = useSelector(getIsCreateWindowOpen)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.getAllProducts())
    }, [])

    const handleCreateProductWindow = () => {
        dispatch(actions.setIsCreateWindowOpen(!isCreateWindowOpen))
    }

    const onSubmit = async (formData: FormDataType) => {
        const { name, imageUrl, count, width, height, weight } = formData
        const newFormData = {
            name,
            imageUrl,
            count,
            size: {
                width,
                height
            },
            weight
        }
        // @ts-ignore
        dispatch(actions.createProduct(newFormData))
    }

    const handleDeleteProduct = (product: ProductType) => {
        setDeletedProduct(product)
        setIsDeleteProductWindowOpen(true)
    }

    const onSubmitDelete = async () => {
        try {
            if (deletedProduct) {
                dispatch(actions.deleteProduct(deletedProduct.id))
                setIsDeleteProductWindowOpen(false)
            }
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div className='products'>
            <div className='products__content'>
                {products.length !== 0
                    ? <div className='products__list'>
                        {products.map((product: ProductType) => (
                            <Product key={product.id} product={product} handleDeleteProduct={handleDeleteProduct} />
                        ))}
                    </div>
                    : <div className='products__list_empty'>
                        <span>There are no products</span>
                    </div>
                }
                <div className='products__actions'>
                    <div className='create__product' onClick={handleCreateProductWindow}>
                        <AddBoxIcon />
                    </div>
                </div>
            </div>
            {isCreateWindowOpen && <CreateProduct onSubmit={onSubmit} />}
            {isDeleteProductWindowOpen && <DeleteProduct handleCloseWindow={() => setIsDeleteProductWindowOpen(false)}
                onSubmit={onSubmitDelete}
            />}
        </div>
    )
}