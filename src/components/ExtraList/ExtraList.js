import React from 'react';
import { H2 } from '../styledComp';
import {
  StyledWrapper,
  StyledInnerText,
  StyledInnerWrapper,
  StyledText
} from './styledExtraList';
import CustomSelect from '../CustomSelect/CustomSelect';

const ExtraList = () => {
  return (
    <StyledWrapper>
      <StyledInnerText>
        <H2 xl>Przedmioty dodatkowe do wyboru</H2>
      </StyledInnerText>
      <StyledInnerWrapper>
        <CustomSelect />
        <H2 black xl mt ter>
          Kierunki Studiów
        </H2>
        <StyledText>
          Analityka gospodarcza; Automatyka, robotyka i systemy sterowania;
          Automatyka, cybernetyka i robotyka; Biotechnologia; Budownictwo;
          Chemia; Chemia budowlana; Elektronika i telekomunikacja;
          Elektrotechnika; Energetyka; Fizyka techniczna; Geodezja i
          kartografia; Informatyka; Inżynieria biomedyczna; Inżynieria
          materiałowa; Inżynieria mechaniczno-medyczna; Inżynieria środowiska;
          Inżynieria danych; Matematyka; Mechanika i budowa maszyn;
          Mechatronika; Nanotechnologia; Ochrona środowiska; Oceanotechnika;
          Technologia chemiczna; Transport; Zarządzanie; Zarządzanie
          inżynierskie; Zarządzanie i inżynieria produkcji; Zielone technologie
        </StyledText>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default ExtraList;
