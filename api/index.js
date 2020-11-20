import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './server/routes/BookRoutes';

config.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 2020;

app.use('/api/v1/books', bookRoutes);

// when a random route is inputed
app.get('/api', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));

app.get('*', function(req, res){
   res.sendFile(__dirname+'/index.html');
 });

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

// export default app;