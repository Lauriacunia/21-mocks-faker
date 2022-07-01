import express from 'express';
import { faker } from '@faker-js/faker/locale/es';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/mock', (req, res) => {
    const clientes = [];  
    for(let i = 0; i < 10; i++) {
        clientes.push({
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            email: faker.internet.email(),
            direccion: faker.address.streetAddress(),
            telefono: faker.phone.number('+54 11 ### ## ##')
        });
    }
    res.json(clientes);
});




const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);