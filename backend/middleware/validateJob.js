const validateJob = (req, res, next) => {
    const { title, type, location, description, salary, company } = req.body;
    
    if (!title || !type || !location || !description || !salary || !company) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    next();
  };
  
  export default validateJob;