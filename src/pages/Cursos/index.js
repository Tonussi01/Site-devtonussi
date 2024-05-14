import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardCursos from './../../Components/CardCursos/index.js';
import Certificado from './../../Images/Certificado.png';
import Certificado2 from './../../Images/Certificado2.png';

export default function Cursos() {
  return (
    <MidBody>
      <MainTitle>Cursos</MainTitle>
      <br />
      <MainContent>
        <CardCursos
           
            title="Formação Python e orientação a objetos"
            content="100 horas"
            school="Alura"
            conclusion="novembro de 2021."
            description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."
            image={Certificado} />
                       
        <br />
        <CardCursos
          title="Desenvolvimento de Jogos com Unity"
          content="90 horas"
          school="Alura"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."
                       image={Certificado2} /> 
                              
        <br />
        <CardCursos
          title="Formação HTML e CSS em projetos Web"
          content="35 horas"
          school="Alura"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
        <CardCursos
          title="Excel"
          content="58 horas"
          school="Alura"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
        <CardCursos
          title="Git e Github: controle e compartilhe seu código"
          content="6 horas"
          school="Alura"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
        <CardCursos
          title="Scrum: agilidade em seu projeto"
          content="10 horas"
          school="Alura"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
        <CardCursos
          title="Detecção de Objetos com Python e OpenCV"
          content="4 horas"
          school="Udemy"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
        <CardCursos
          title="Curso Completo de Desenvolvimento de jogos com Unity"
          content="21 horas"
          school="Udemy"
          conclusion="novembro de 2021."
          description="Neste curso de programação de sistemas, você será guiado por uma jornada desafiadora
                       e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito 
                       acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,
                       você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas 
                       entusiasmados para compartilhar sua jornada."/>
        <br />
      </MainContent>
    </MidBody>
  );
}
