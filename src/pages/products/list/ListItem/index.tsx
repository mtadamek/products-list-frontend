import React from "react";
import { Button } from "../../components";
import { IListItemProps } from "./ListItem.d";
import {
  Actions,
  Container,
  Details,
  DetailsTable,
  DetailsTd,
  DetailsTh,
  Header,
  NameContainer,
  RemoveButton,
  Spinner,
} from "../components";
import { useListItemData } from "../hooks";
import { CATEGORIES } from "../../../../constants";

const getCategoryName = (id: number) => {
  if (id > CATEGORIES.length || id < 0) {
    return "-";
  }
  return CATEGORIES[id];
};

const ListItem = ({ product }: IListItemProps) => {
  const {
    isDetailsVisible,
    isDeleting,
    handleDeleteClick,
    handleItemClick,
    handleEditProduct,
  } = useListItemData();

  return (
    <Container>
      <Header>
        <NameContainer onClick={handleItemClick}>{product.name}</NameContainer>
        <Actions>
          <Button onClick={() => handleEditProduct(product)}>Edytuj</Button>
          <RemoveButton onClick={() => handleDeleteClick(product.id)}>
            {isDeleting ? <Spinner /> : "Usuń"}
          </RemoveButton>
        </Actions>
      </Header>
      {isDetailsVisible && (
        <Details>
          <DetailsTable>
            <tr>
              <DetailsTh>Nazwa</DetailsTh>
              <DetailsTh>Cena</DetailsTh>
              <DetailsTh>Ilość w magazynia</DetailsTh>
              <DetailsTh>Data produkcji</DetailsTh>
              <DetailsTh>Kategoria</DetailsTh>
              <DetailsTh>Opis</DetailsTh>
            </tr>
            <tr>
              <DetailsTd>{product.name}</DetailsTd>
              <DetailsTd>{product.price.toFixed(2)} zł</DetailsTd>
              <DetailsTd>{product.count} szt.</DetailsTd>
              <DetailsTd>{product.date.toString()}</DetailsTd>
              <DetailsTd>{getCategoryName(product.category)}</DetailsTd>
              <DetailsTd>{product.description || "-"}</DetailsTd>
            </tr>
          </DetailsTable>
        </Details>
      )}
    </Container>
  );
};

export default ListItem;
