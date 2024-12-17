import { Button } from '@mui/material'
import { Form, Input, InputNumber, Select } from 'antd'
import * as Yup from 'yup';
import { FC } from 'react'
import { ErrorMessage, Formik } from 'formik';
import './CreateProduct.scss'
import { useAppDispatch } from '../../redux/store';
import { actions } from '../../redux/model/productActions'
import { Close } from '@mui/icons-material'
import './CreateProduct.scss'

type PropsType = {
    onSubmit: (formData: any) => void
}

export const CreateProduct: FC<PropsType> = ({ onSubmit }) => {
    const dispatch = useAppDispatch()

    const [form] = Form.useForm()

    const createProductSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),

        imageUrl: Yup.string().required('Required'),
        count: Yup.number().required(),
        width: Yup.number().required(),
        height: Yup.number().required(),
    })

    const closeWindow = () => {
        dispatch(actions.setIsCreateWindowOpen(false))
    }

    return (
        <div className='create__product_window'>
            <div className='close' onClick={closeWindow}>
                <Close />
            </div>
            <Formik initialValues={{ name: '', imageUrl: '', count: 1, width: 100, height: 100, weight: '' }} onSubmit={onSubmit} validationSchema={createProductSchema}>
                {formik =>
                    <Form style={{ color: '#fff' }} form={form} layout='vertical' onSubmitCapture={formik.handleSubmit}>
                        <div className='name'>
                            <Form.Item name='name' label='Name'>
                                <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                <ErrorMessage name='name' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='imageUrl'>
                            <Form.Item name='imageUrl' label='ImageUrl'>
                                <Input name='imageUrl' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.imageUrl} />
                                <ErrorMessage name='imageUrl' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='count'>
                            <Form.Item name='count' label='Count'>
                                <InputNumber name='count' type='number'
                                    onChange={v => {
                                        if (v !== null && v >= 1) {
                                            formik.setFieldValue('count', v)
                                        } else {
                                            return
                                        }
                                    }
                                    }
                                    onBlur={formik.handleBlur} value={formik.values.count} />
                                <ErrorMessage name='count' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='width'>
                            <Form.Item name='width' label='Width'>
                                <InputNumber name='width' type='number'
                                    onChange={v => {
                                        if (v !== null && v >= 1) {
                                            formik.setFieldValue('width', v)
                                        } else {
                                            return
                                        }
                                    }
                                    }
                                    onBlur={formik.handleBlur} value={formik.values.width} />
                                <ErrorMessage name='width' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='height'>
                            <Form.Item name='height' label='Height'>
                                <InputNumber name='height' type='number'
                                    onChange={v => {
                                        if (v !== null && v >= 1) {
                                            formik.setFieldValue('height', v)
                                        } else {
                                            return
                                        }
                                    }
                                    }
                                    onBlur={formik.handleBlur} value={formik.values.height} />
                                <ErrorMessage name='height' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='weight'>
                            <Form.Item name='weight' label='Weight'>
                                <Input name='weight' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weight} />
                                <ErrorMessage name='weight' component='div' className='error__message' />
                            </Form.Item>
                        </div>
                        <div className='btn__actions'>
                            <Button variant='contained' color='error' type='button' onClick={closeWindow}>Cancel</Button>
                            <Button variant='contained' type='submit'>Save</Button>
                        </div>
                    </Form>}
            </Formik>
        </div>
    )
}