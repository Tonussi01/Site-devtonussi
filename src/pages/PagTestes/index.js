import React, { useState } from 'react';
import { MidBody, MainTitle, MainContent, FilterButtons, FilterButton } from './styles';
import CardCursosMini from './../../Components/CardCursosMini';

const PagTestes = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleToggleTechnology = (tech) => {
    setSelectedTechnologies((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  };

  const courses = [
    { title: "Formação Python e orientação a objetos",
 content: "100 horas",
 tecnology: "Python",
 barColor: "#2563eb",
 school: "Alura",
 conclusion:"novembro de 2021.",description:"Neste curso de programação de sistemas,você será guiado por uma jornada desafiadora e emocionante através do mundo do código. Os instrutores apaixonados tornam cada conceito acessível, enquanto os projetos práticos garantem que você aplique o que aprendeu. Ao final,você não apenas terá habilidades técnicas sólidas, mas também uma comunidade de colegas entusiasmados para compartilhar sua jornada.",
 image: "https://raw.githubusercontent.com/Tonussi01/Site-devtonussi/master/src/Images/Certificados/Certificado%201.png"
 },
 { title: "Desenvolvimento de Jogos com Unity", content: "90 horas", tecnology: "Unity + C#", barColor: "#a3e635" },
    { title: "Formação HTML e CSS em projetos Web", content: "35 horas", tecnology: "HTML + CSS", barColor: "#7e22ce" },
    { title: "Excel", content: "58 horas", tecnology: "Excel", barColor: "#dc2626" },
    { title: "HTTP: Entendendo a web por baixo dos panos", content: "5 horas", tecnology: "Python", barColor: "#a3e635" },
    { title: "Git e Github: controle e compartilhe seu código", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "C#: explorando a linguagem", content: "5 horas", tecnology: "C#", barColor: "#7e22ce" },
    { title: "Comandos DML: manipulação de dados com MySQL", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Consultas SQL: avançando no SQL com MySQL", content: "5 horas", tecnology: "SQL", barColor: "#2563eb" },
    { title: "Python e TDD: explorando testes unitários", content: "5 horas", tecnology: "Python", barColor: "#a3e635" },
    { title: "SQL com MySQL: manipule e consulte dados", content: "5 horas", tecnology: "Python", barColor: "#7e22ce" },
    { title: "Análise de dados: cálculos, padrões e estratégias com Excel", content: "5 horas", tecnology: "SQL", barColor: "#2563eb" },
    { title: "Excel: simulação e análise de cenários", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Excel: tabelas dinâmicas e dashboards", content: "5 horas", tecnology: "Python", barColor: "#dc2626" },
    { title: "Excel procv: lógica booleana e busca por valores", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Excel: domine o editor de planilhas", content: "5 horas", tecnology: "Python", barColor: "#dc2626" },
    { title: "Funções com Excel: operações matemáticas e filtros", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Layouts Responsivos: trabalhando com layouts mobile", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "HTML5 e CSS3 parte 4: avançando no CSS", content: "5 horas", tecnology: "HTML + CSS", barColor: "#2563eb" },
    { title: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação", content: "5 horas", tecnology: "HTML + CSS", barColor: "#2563eb" },
    { title: "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas", content: "5 horas", tecnology: "HTML + CSS", barColor: "#2563eb" },
    { title: "HTML5 e CSS3 parte 1: crie uma página da Web", content: "5 horas", tecnology: "HTML + CSS", barColor: "#2563eb" },
    { title: "Unity Mobile parte 2: interface responsiva e desempenho", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity Mobile parte 3: aprofundando em jogos Mobile", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity parte 4: Chefão, partículas e menu", content: "5 horas", tecnology: "Unity + C#", barColor: "#dc2626" },
    { title: "Unity Mobile parte 1: jogos para celular com persistência de dados", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity parte 3: criando um chefão e refinando o jogo", content: "", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity 2D parte 1: criando um jogo 2D", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity 2D parte 2: adicionando efeitos visuais ao seu jogo", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Unity 2D parte 3: criando um jogo multiplayer", content: "5 horas", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "UML: modelagem de diagramas", content: "", tecnology: "Python", barColor: "#2563eb" },
    { title: "C# parte 3: entendendo herança e interface", content: "5 horas", tecnology: "C#", barColor: "#dc2626" },
    { title: "C# parte 1: primeiros passos", content: "5 horas", tecnology: "C#", barColor: "#2563eb" },
    { title: "C# parte 2: Entendendo a Orientação a Objetos", content: "5 horas", tecnology: "C#", barColor: "#2563eb" },
    { title: "Scrum: agilidade em seu projeto", content: "", tecnology: "Python", barColor: "#2563eb" },
    { title: "Agilidade: promovendo a transformação ágil", content: "5 horas", tecnology: "Python", barColor: "#dc2626" },
    { title: "Blender: trabalhando na modelagem Low Poly", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "UX: entenda a experiência de usuário", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Testes automatizados: TDD com Python", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Unity parte 2: iluminação, interface e boas práticas", content: "5 horas", tecnology: "Unity + C#", barColor: "#fde047" },
    { title: "Python Brasil: validação de dados no padrão nacional", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Unity parte 1: criação de um jogo de sobrevivência à zumbis para Web", content: "", tecnology: "Unity + C#", barColor: "#2563eb" },
    { title: "Python Collections parte 1: listas e tuplas", content: "5 horas", tecnology: "Python", barColor: "#fde047" },
    { title: "Python Collections parte 2: conjuntos e dicionários", content: "5 horas", tecnology: "Python", barColor: "#fde047" },
    { title: "String em Python: extraindo informações de uma URL", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Python: avançando na orientação a objetos", content: "5 horas", tecnology: "Python", barColor: "#7e22ce" },
    { title: "Python: entendendo a Orientação a Objetos", content: "5 horas", tecnology: "Python", barColor: "#2563eb" },
    { title: "Python: avançando na linguagem", content: "5 horas", tecnology: "Python", barColor: "#7e22ce" },
    { title: "Python: começando com a linguagem", content: "5 horas", tecnology: "Python", barColor: "#7e22ce" },
  ];

  const availableTechnologies = ["Python", "Unity + C#", "HTML + CSS", "Excel","C#"];

  const filteredCourses = courses.filter(course =>
    selectedTechnologies.length === 0 ||
    selectedTechnologies.includes(course.tecnology)
  );

  return (
    <MidBody>
      <MainTitle>Cursos</MainTitle>
      <FilterButtons>
        {availableTechnologies.map((tech) => (
          <FilterButton
            key={tech}
            selected={selectedTechnologies.includes(tech)}
            onClick={() => handleToggleTechnology(tech)}
          >
            {tech}
          </FilterButton>
        ))}
      </FilterButtons>
      <MainContent>
        {filteredCourses.map((course, index) => (
          <CardCursosMini
            key={index}
            title={course.title}
            content={course.content}
            tecnology={course.tecnology}
            barColor={course.barColor}
            school={course.school}
            conclusion={course.conclusion}
            description={course.description}
            image={course.image}

          />
        ))}
      </MainContent>
    </MidBody>
  );
};

export default PagTestes;
