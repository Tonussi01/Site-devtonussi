import React, { useState, useEffect } from 'react';
import { MidBody, MainTitle, MainContent, FilterButtons, FilterButton } from './styles';
import CardCursosMini from './../../Components/CardCursosMini';

export default function Cursos() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from the JSON file
    fetch('https://raw.githubusercontent.com/Tonussi01/Site-devtonussi/master/src/courses.json')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleToggleTechnology = (tech) => {
    setSelectedTechnologies((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  };

  console.log(courses);
  const availableTechnologies = ["Python", "Unity", "HTML + CSS", "Excel", "C#"];

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
}
