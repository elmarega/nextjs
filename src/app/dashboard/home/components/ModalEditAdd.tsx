import React from 'react';
import Modal from '@/app/shared/components/Modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Title, Form } from '../styles/home-styles';

interface ModalEditAddProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  editingProduct: any;
}

const schema = z.object({
  title: z.string().nonempty('Nome do Produto é obrigatório'),
  description: z.string().nonempty('Descrição é obrigatória'),
  price: z.number().positive('Valor deve ser um número positivo'),
  category: z.string().nonempty('Categoria é obrigatória'),
});

const ModalEditAdd: React.FC<ModalEditAddProps> = ({ isOpen, onClose, onSubmit, editingProduct }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  React.useEffect(() => {
    if (editingProduct) {
      setValue("title", editingProduct.title);
      setValue("description", editingProduct.description);
      setValue("price", editingProduct.price);
      setValue("category", editingProduct.category);
    } else {
      reset();
    }
  }, [editingProduct, setValue, reset]);

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>
        <h1>{editingProduct ? "Edição" : "Cadastro"}</h1>
      </Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="title">Nome do Produto</label>
        <input id="title" {...register("title")} />
        {errors.title && <p>{errors.title.message}</p>}
        
        <label htmlFor="description">Descrição</label>
        <input id="description" {...register("description")} />
        {errors.description && <p>{errors.description.message}</p>}
        
        <label htmlFor="price">Valor</label>
        <input id="price" type="number" {...register("price", { valueAsNumber: true })} />
        {errors.price && <p>{errors.price.message}</p>}
        
        <label htmlFor="category">Categoria</label>
        <input id="category" {...register("category")} disabled={editingProduct} />
        {errors.category && <p>{errors.category.message}</p>}
        
        <button className="primary" type="submit">
          {editingProduct ? "Atualizar" : "Adicionar"}
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditAdd;