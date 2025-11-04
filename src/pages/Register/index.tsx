import { useState } from "react";

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
} from "./style";

import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { categories } from "../../utils/categories";

import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../Contexts/AuthContext";
import { Menu } from "../../components/Menu";
import { format } from "date-fns";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CreateTransactionCommand,
  CreateTransactionCommandProps,
  CreateTransactionHandler,
} from "./commands/create-transacation.command";
import { toast } from "sonner";
import { ToasterWithActions } from "../../components/Toaster/ToasterWithAction";

const TransactionSchema = yup.object({
  name: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
  typeTransaction: yup.string().required(),
});

type TransactionSchemaProps = yup.InferType<typeof TransactionSchema>;

export function Register() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(TransactionSchema),
  });

  const typeTransaction = watch("typeTransaction");
  const categorySelected = watch("category");

  const { user } = useAuth();

  function handleCategoryOpen() {
    if (categoryOpen) setCategoryOpen(false);
    else setCategoryOpen(true);
  }

  async function createTransaction(
    transaction: TransactionSchemaProps,
    date: string
  ) {
    const propsCreateTransactionCommand: CreateTransactionCommandProps = {
      name: transaction.name,
      value: transaction.price,
      category: categorySelected,
      type: typeTransaction,
      date,
      user_id: user.id,
    };

    const createTransactionCommand = new CreateTransactionCommand(
      propsCreateTransactionCommand
    );

    const createTransactionHandler = new CreateTransactionHandler();

    const toastId = toast(
      <ToasterWithActions
        title="Transação criada"
        description="Desfazer em até 3 segundos."
        actionLabel="Desfazer"
        duration={3000}
        onAction={() => {
          resetFormFields();
          navigate("/");
          toast.dismiss(toastId);
        }}
        onFinishToast={async () => {
          if (!createTransactionHandler || !createTransactionCommand) return;
          await createTransactionHandler.handle(createTransactionCommand);
          toast.dismiss(toastId);
          resetFormFields();
          navigate("/");
        }}
      />,
      { duration: 3000 }
    );
  }

  function resetFormFields() {
    reset({
      name: "",
      price: 0,
      category: "",
      typeTransaction: "",
    });
  }

  async function handleRegisterTransaction(
    transaction: TransactionSchemaProps
  ) {
    const dateFormatted = format(new Date(), "dd/MM/yyyy");
    try {
      await createTransaction(transaction, dateFormatted);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>
        <ExtendedArea>
          <ContainerForm>
            <Title>Cadastro</Title>

            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  errorMessage={errors.name?.message ?? null}
                  placeholder="Nome"
                  onChange={(event) => onChange(event.target.value)}
                  value={value}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type="number"
                  errorMessage={errors.price?.message ?? null}
                  placeholder="Preço"
                  onChange={(event) => onChange(event.target.value)}
                  value={value}
                />
              )}
            />

            <ContainerButtons>
              <ButtonTypeTransaction
                selected={typeTransaction === "income" ? true : false}
                color="green"
                onClick={() => {
                  setValue("typeTransaction", "income");
                }}
              >
                <ButtonIcon src="Entradas.svg" />
                Income
              </ButtonTypeTransaction>

              <ButtonTypeTransaction
                selected={typeTransaction === "outcome" ? true : false}
                color="red"
                onClick={() => {
                  setValue("typeTransaction", "outcome");
                }}
              >
                <ButtonIcon src="Saidas.svg" />
                Outcome
              </ButtonTypeTransaction>
            </ContainerButtons>

            <ContainerCategory>
              <ButtonSelect onClick={handleCategoryOpen}>
                {categorySelected != "" ? categorySelected : "Categorias"}
              </ButtonSelect>
              <ContainerButtonsCategory
                className={categoryOpen ? "" : "hidden"}
              >
                {categories.map((category) => (
                  <ButtonOfCategory
                    onClick={() => {
                      setValue("category", category.categoria);
                      setCategoryOpen(false);
                    }}
                  >
                    <IconCategory
                      src={category.icon}
                      alt="icone da categoria"
                    />
                    {category.categoria}
                  </ButtonOfCategory>
                ))}
              </ContainerButtonsCategory>
            </ContainerCategory>

            <ButtonSend onClick={handleSubmit(handleRegisterTransaction)}>
              Salvar
            </ButtonSend>
          </ContainerForm>
        </ExtendedArea>
      </Header>
      <Menu screenSelected="register" />
    </Container>
  );
}
