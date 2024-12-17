import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import { FC } from 'react'
import './DeleteProduct.scss'
import { ProductType } from '../../redux/types/Product.type';

type PropsType = {
    onSubmit: () => void
    handleCloseWindow: () => void
}

export const DeleteProduct: FC<PropsType> = ({ onSubmit, handleCloseWindow }) => {
    const handleBackClick = () => {
        handleCloseWindow()
    }

    return (
        <div className='delete__product_window'>
            <span>Are you sure you want to delete this product?</span>
            <div className='btn__actions'>
                <Button className='back' variant='contained' color='error' onClick={handleBackClick}>Back</Button>
                <Button className='delete' variant='contained' startIcon={<DeleteIcon />} onClick={onSubmit}>
                    Delete
                </Button>
            </div>
        </div>
    )
}