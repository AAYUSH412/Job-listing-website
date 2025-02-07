// frontend/src/utils/formatters.js
export const formatSalary = (salary) => {
    return salary.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };