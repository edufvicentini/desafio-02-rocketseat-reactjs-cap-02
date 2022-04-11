import  { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import {Input} from '../Input';

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: any) =>  void;
  isOpen: boolean;
  editingFood: any;
}

export function ModalEditFood({setIsOpen, handleUpdateFood, isOpen, editingFood}: ModalEditFoodProps) {
  const id = editingFood.id;
  const [ image, setImage ] = useState<string>(editingFood.image);
  const [ name, setName ] = useState<string>(editingFood.name);
  const [ price, setPrice ] = useState<string>(editingFood.price);
  const [ description, setDescription ] = useState<string>(editingFood.description);

  function handleSubmit(): void{
    
    handleUpdateFood({
      id,
      image,
      name,
      price,
      description
    });
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input 
            name="image" 
            placeholder="Cole o link aqui"
            value={image}
            onChange={event => setImage(event.target.value)} />

          <Input 
            name="name" 
            placeholder="Ex: Moda Italiana" 
            value={name}
            onChange={event => setName(event.target.value)} />

          <Input 
            name="price" 
            placeholder="Ex: 19.90"
            value={price}
            onChange={event => setPrice(event.target.value)} />

          <Input 
            name="description" 
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)} />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  };