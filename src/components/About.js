import styled from "styled-components";

const Apresenta = styled.div`
  background-color: purple;
  width: 50%;
`;

const About = () => {
  let pessoa = (nome, idade, curso) => {
    return (
      <div>
        <p>
          Ola meu nome é {nome}, tenho {idade} anos e estou cursando bacharelado
          em {curso}.
        </p>
      </div>
    );
  };
  return <Apresenta>{pessoa("Larissa", 22, "estatística")}</Apresenta>;
};
export default About;
