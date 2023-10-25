import React, { useState } from "react";
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
} from "./components";

const CATEGORIES = ["smartfony", "laptopy", "wyświetlacze"];

const getCategoryName = (id: number) => {
  if (id > CATEGORIES.length || id < 0) {
    return "-";
  }
  return CATEGORIES[id];
};

const ListItem = ({ product }: IListItemProps) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleItemClick = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const handleDeleteClick = async () => {
    console.log("DELETE ", product.id);
  };

  return (
    <Container>
      <Header>
        <NameContainer onClick={handleItemClick}>{product.name}</NameContainer>
        <Actions>
          <Button>Edytuj</Button>
          <RemoveButton onClick={handleDeleteClick}>Usuń</RemoveButton>
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
              <DetailsTd>{product.price.toFixed(2)}</DetailsTd>
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
