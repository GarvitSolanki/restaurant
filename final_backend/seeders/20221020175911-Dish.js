'use strict';

const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const categories = await queryInterface.sequelize.query(
    'SELECT * FROM "categories"', {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })
  

    await queryInterface.bulkInsert('dishes', [{
      name: 'Aloo Paratha',
      price: 60,
      image: 'aalo.jpeg'
    },
    {
      name: 'Burger',
      price: 70,
      image: 'burger.jpeg'
    },
    {
      name: 'Butterscotch shake',
      price: 90,
      image: 'butterscotch shake.jpeg'
    },
    {
      name: 'Chocolate shake',
      price:120,
      image:'chocolate shake.jpeg'
    },
    {
      name: 'Dosa',
      price:170,
      image:'dosa.jpeg'
    },
    {
      name: 'Gobi Paratha',
      price:120,
      image:'gobi parantha.jpeg'
    },
    {
      name: 'Paneer Paratha',
      price:150,
      image:'paneer parantha.jpeg'
    },
    {
      name:"Pav Bhaji",
      price:70,
      image:"pav bhaji.jpeg"
    },
    {
      name:"Pizza",
      price:80,
      image:"pizza.jpeg"
    },
    {
      name: 'Pyaz Paratha',
      price:170,
      image:'pyaz parantha.jpeg'
    }
  ].map(dish => ({
    ...dish,
    categoryId: categories.find(cat => cat.name === 'Veg').id,
    image: fs.readFileSync('img/'+dish.image),
    createdAt: new Date(),
    updatedAt: new Date()
  })))
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
