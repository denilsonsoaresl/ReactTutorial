export default function Project({ project }) {
    return (
      <>
        <h1>{project.name}</h1>
        <p>{project.date_of_creation}</p>
      </>
    );
  }
  