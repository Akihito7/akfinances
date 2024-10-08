import { useState } from 'react';

import {
  Container,
  ContainerForm,
  Title,
  ContainerButtons,
  ButtonTypeTransaction,
  ButtonIcon,
  ContainerCategory,
  ContainerButtonsCategory,
  ButtonOfCategory,
  IconCategory,
  ButtonSelect,
  ButtonSend,
  Header,
  ExtendedArea,
} from './style'

import { Input } from '../../components/Input'
import { useNavigate } from "react-router-dom"

import { categories } from '../../utils/categories';

import { Controller, useForm } from "react-hook-form"
import { api } from '../../axios';
import { useAuth } from '../../Contexts/AuthContext';
import { Menu } from '../../components/Menu';

type PropsTransaction = {
  name: string,
  price: string,
}
export function Register() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeTransaction, setTypeTransaction] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm();
  const { user, logout } = useAuth();

  function handleCategoryOpen() {
    if (categoryOpen) setCategoryOpen(false)
    else setCategoryOpen(true)
  };

  async function handleRegisterTransaction(transaction: PropsTransaction) {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let year = today.getFullYear();

    if(!Number(transaction.price)) return alert("Forneça um valor válido!")

    try {
      await api.post("/transaction/", {
        name: transaction.name,
        value: transaction.price,
        category: categorySelected,
        type: typeTransaction,
        date: `${day}/${month}/${year}`,
        user_id: user.id,
      });
      reset({
        'name': '',
        'price': '',
      });
      setTypeTransaction('');
      setCategorySelected('');
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header>
        <ExtendedArea>
          <ContainerForm>
            <Title>Cadastro</Title>

            <Controller
              name='name'
              control={control}
              render={({ field: { onChange, value } }) => (

                <Input
                  errorMessage={null}
                  placeholder='Nome'
                  onChange={(event) => onChange(event.target.value)}
                  value={value}
                />
              )}
            />

            <Controller
              name='price'
              control={control}
              render={({ field: { onChange, value } }) => (

                <Input
                  errorMessage={null}
                  placeholder='Preço'
                  onChange={(event) => onChange(event.target.value)}
                  value={value}
                />
              )}
            />

            <ContainerButtons>
              <ButtonTypeTransaction
                selected={typeTransaction === "income" ? true : false}
                color='green'
                onClick={() => { setTypeTransaction("income") }}
              >
                <ButtonIcon src='Entradas.svg' />
                Income
              </ButtonTypeTransaction>

              <ButtonTypeTransaction
                selected={typeTransaction === "outcome" ? true : false}
                color='red'
                onClick={() => { setTypeTransaction("outcome") }}
              >
                <ButtonIcon src='Saidas.svg' />
                Outcome
              </ButtonTypeTransaction>

            </ContainerButtons>

            <ContainerCategory>
              <ButtonSelect onClick={handleCategoryOpen}>
                {categorySelected != '' ? categorySelected : "Categorias"}
              </ButtonSelect>
              <ContainerButtonsCategory
                className={categoryOpen ? '' : 'hidden'}
              >

                {
                  categories.map((category) => (
                    <ButtonOfCategory
                      onClick={() => {
                        setCategorySelected(category.categoria)
                        setCategoryOpen(false)
                      }}
                    >
                      <IconCategory
                        src={category.icon}
                        alt='icone da categoria'
                      />
                      {category.categoria}
                    </ButtonOfCategory>
                  ))
                }

              </ContainerButtonsCategory>
            </ContainerCategory>

            <ButtonSend
              onClick={handleSubmit(handleRegisterTransaction)}
            >
              Salvar
            </ButtonSend>


          </ContainerForm>

        </ExtendedArea>
      </Header>
      {


      }
      <Menu screenSelected='register' />

    </Container>
  )
}