import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SpiralImage from "../SpiralImage";

function Detail() {
  const { todoList } = useSelector((state) => state.todoList);
  const { id } = useParams();

  const todo = todoList && todoList.find((item) => item.id === parseInt(id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <BackgroundContainer>
      <SpiralImageContainer>
        <SpiralImage />
      </SpiralImageContainer>
      <Container>
        <Heading>let's burn ❤️‍🔥</Heading>
        <DetailDiv>
          <Text>ID: {todo.id}</Text>
          <Title>{todo.title}</Title>
          <Text>{todo.body}</Text>
          <StyleLink to={-1}>이전으로</StyleLink>
        </DetailDiv>
      </Container>
    </BackgroundContainer>
  );
}

export default Detail;

const BackgroundContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
`;

const SpiralImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  position: relative;
  border-radius: 0.5rem;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

const DetailDiv = styled.div`
  margin: 3rem auto;
  max-width: 400px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid gray;
  border-radius: 0.5rem;
  position: relative;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
`;

const StyleLink = styled(Link)`
  border-radius: 10px;
  cursor: pointer;
  color: #fd6f6f;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;

const Heading = styled.h1`
  font-size: 70px;
  margin: 10px;
  text-align: center;
`;
