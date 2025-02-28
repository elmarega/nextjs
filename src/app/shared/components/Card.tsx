import { ReactNode } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  height: 100%;
  background: #efefef;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  border-left: 5px solid var(--primary-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;

`;

const CardTitle = styled.h2`
  color: var(--primary-color);
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardContent = styled.div``;

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`;

export default function Card({
  title,
  content,
  children,
}: {
  title: string;
  content: ReactNode;
  children?: ReactNode;
}) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      {children && <CardFooter>{children}</CardFooter>}
    </CardWrapper>
  );
}
