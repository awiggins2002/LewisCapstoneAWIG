import api from './api/axiosConfig';
import './App.css';
import React, { useState } from 'react';
import {useState, useEffect} from 'react';

function App() {

    const [formData, setFormData] = useState({
        mealName: '',
        calories: '',
        carbs: '',
        sugar: '',
        fat: '',
        satFat: '',
        unsatFat: '',
        transFat: '',
        protein: '',
        vitaminA: '',
        vitaminB: '',
        vitaminC: '',
        calcium: '',
        cholesterol: '',
        sodium: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can send formData to an API here
    };
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h1 style={{ display: 'flex', justifyContent: 'center' }}>Add Food</h1>
              <div style={{ marginTop: '15px' }} className='addFoodDiv'>
                  <label>Meal Name: </label>
                  <input
                      type="text"
                      name="mealName"
                      value={formData.mealName}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Calories: </label>
                  <input
                      type="text"
                      name="calories"
                      value={formData.calories}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Carbohydrates: </label>
                  <input
                      type="text"
                      name="carbs"
                      value={formData.carbs}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Sugar: </label>
                  <input
                      type="text"
                      name="sugar"
                      value={formData.sugar}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Fat: </label>
                  <input
                      type="text"
                      name="fat"
                      value={formData.fat}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Saturated Fat: </label>
                  <input
                      type="text"
                      name="satFat"
                      value={formData.satFat}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Unsaturated Fat: </label>
                  <input
                      type="text"
                      name="unsatFat"
                      value={formData.unsatFat}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Trans Fat: </label>
                  <input
                      type="text"
                      name="transFat"
                      value={formData.transFat}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Protein: </label>
                  <input
                      type="text"
                      name="protein"
                      value={formData.protein}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Vitamin A: </label>
                  <input
                      type="text"
                      name="vitaminA"
                      value={formData.vitaminA}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Vitamin B: </label>
                  <input
                      type="text"
                      name="vitaminB"
                      value={formData.vitaminB}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Vitamin C: </label>
                  <input
                      type="text"
                      name="vitaminC"
                      value={formData.vitaminC}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Calcium: </label>
                  <input
                      type="text"
                      name="calcium"
                      value={formData.calcium}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Cholesterol: </label>
                  <input
                      type="text"
                      name="cholesterol"
                      value={formData.cholesterol}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div className='addFoodDiv'>
                  <label>Sodium: </label>
                  <input
                      type="text"
                      name="sodium"
                      value={formData.sodium}
                      onChange={handleChange}
                      required
                      className='food-input'
                  />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
                  <button type="submit" style={{ marginTop: '15px', justifyContent: 'center', alignItems: 'center' }} >Submit</button>
              </div>
          </form>
      </div>
  );
}

export default App;
