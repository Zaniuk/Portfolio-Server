'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        title: 'The Wine Valley',
        description: '<p>Static website built with HTML, CSS and JavaScript. Simulates a wine shop.</p>',
        image: 'https://wallpaperaccess.com/full/468014.jpg',
        github: "https://github.com/Zaniuk/WeatherReactApp",
        status: 'finished',
        tags: 'frontend|static',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: 'ONG Alkemy API',
        description: '<p>RESTful API made with NodeJS, Express, MySQL and Sequelize. It have JWT-based auth system and form validations.</p>',
        image: 'https://wallpaperaccess.com/full/468014.jpg',
        github: "https://github.com/Zaniuk/WeatherReactApp",
        status: 'finished',
        tags: 'backend|restful api',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: 'ABM Bancario',
        description: '<p>A banking system built with React.js, Node.js, Express, PostgreSQL and Sequelize.</p>',
        image: 'https://wallpaperaccess.com/full/468014.jpg',
        github: "https://github.com/Zaniuk/WeatherReactApp",
        status: 'finished',
        tags: 'fullstack|restful api',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: 'Anime Recommendations App',
        description: '<p>A simple anime recommendations app built with React.JS.</p>',
        image: 'https://wallpaperaccess.com/full/468014.jpg',
        github: "https://github.com/Zaniuk/WeatherReactApp",
        status: 'finished',
        tags: 'frontend|api',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        title: 'React Weather App',
        description: '<p>A simple weather app built with React.js and OpenWeatherMap API.</p>',
        image: 'https://wallpaperaccess.com/full/468014.jpg',
        github: "https://github.com/Zaniuk/WeatherReactApp",
        tags: 'frontend|api',
        status: 'finished',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
