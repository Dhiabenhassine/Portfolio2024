import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "SuperHost",
      subtitle: "Digitales Native",
      date: "Jan 2023...",
      description: [
        "Develop the backend for a web application similar to Airbnb using Node.js, Express.js, and Sequelize.",
        "Implement APIs such as OpenAI and FastForex.",
        "Perform unit tests on the server using Termius.",
        "Document the project using APIDOG.com.",
        "Develop an admin dashboard with a Material UI template."
      ],
      link: "http://superhost.com.tn"
    },
    {
      title: "Sales Store Dashboard",
      subtitle: "Freelance",
      date: "10-2023",
      description: [
        "Develop the backend for an Admin dashboard using Node.js, Express.js, and Sequelize.",
        "Develop an admin dashboard with a Material UI template."
      ]
    },
    {
      title: "TAWELTI Mobile Application",
      subtitle: "Rebootkamp (RBK)",
      date: "Aug 2022 - Jan 2023",
      description: [
        "Integrate Cloudinary with React Native.",
        "Implement functionality to retrieve latitude and longitude of a place or city and display GPS coordination on a map.",
        "Developed feature to add location information using Cloudinary for media storage and map integration (both backend and frontend).",
        "Created reservation system allowing users to select items from the menu and process with the reservation.",
        "Designed and developed an admin dashboard for managing various aspects of the application.",
        "Established a Link ID for the mobile application."
      ]
    },
   
  ];

  return (
    <div style={styles.container}>
      {experiences.map((experience, index) => (
        <div key={index} style={styles.card}>
          <h1 style={styles.cardTitle}>{experience.title}</h1>
          <span style={styles.cardSubtitle}>{experience.subtitle}</span>
          <br />
          <span style={styles.cardDate}>{experience.date}</span>
          <p style={styles.cardDescription}>
            {experience.description.map((item, idx) => (
              <React.Fragment key={idx}>
                - {item}
                <br />
              </React.Fragment>
            ))}
          </p>
          {experience.link && (
            <a
              href={experience.link}
              style={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${experience.title} website`}
            >
              {experience.link}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '100%',
    overflowX: 'visible', // Ensure horizontal scrolling if content overflows
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '2px solid #fbbf24',
    boxShadow: '0 0 16px rgba(0,0,0,0.1)',
    padding: '15px',
    borderRadius: '10px',
    width: '100%',
    //maxWidth: '100%',
    height: '100%',
    overflow: 'visible',
    backgroundColor: '#2d2d2d',
    boxSizing: 'border-box',
    
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'lightgray',
  },
  cardDate: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fbbf24',
  },
  cardDescription: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#ccc',
    whiteSpace: 'pre-line',
  },
  cardLink: {
    color: '#fbbf24',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
    fontSize: '1rem',
  },
};

export default Experience;
