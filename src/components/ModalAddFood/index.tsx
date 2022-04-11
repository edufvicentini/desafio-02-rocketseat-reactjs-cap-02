import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import {Input} from '../Input';
import { FormEvent, useState } from 'react';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: any) => Promise<void>;
}

export function ModalAddFood({isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps){
    const [ image, setImage ] = useState<string>('');
    const [ name, setName ] = useState<string>('');
    const [ price, setPrice ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');

    async function handleSubmit(event: FormEvent): Promise<void>{
    await handleAddFood({
      image,
      name,
      price,
      description
    });
    setImage('');
    setName('');
    setPrice('');
    setDescription('');
    
    setIsOpen();
  };
    
  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
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

          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }