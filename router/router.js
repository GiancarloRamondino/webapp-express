const movies = require('../controllers/moviesControllers.js');
const express = require('express'); 
// recupero multer middleware
const upload = require('../middlewares/multer.js'); 

const router = express.Router();
// Define routes for movies     
router.get('/movies', movies.index);
router.get('/movies/:id', movies.show); 
router.post('/movies', upload.single('image'), movies.store);
router.put('/movies/:id', movies.updateMovie);
router.delete('/movies/:id', movies.destroy);

// Define routes for reviews
router.post('/movies/:id/reviews',upload.none(''), movies.storeReview);

// Export the router
module.exports = router;
   


