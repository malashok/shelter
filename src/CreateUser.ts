import {ManagersEntity} from "./Models/entity/Managers.entity";

const bcrypt = require('bcrypt');
const YourEntity = require('./Models/entity/Managers.entity');
const entity = new ManagersEntity();
entity.name = 'ann';
entity.login = 'example';
entity.password = '12345';
entity.hashPassword();
const { getConnection } = require('typeorm');

async function saveEntityToDatabase() {
    const connection = await getConnection();
    const entityRepository = connection.getRepository(YourEntity);

    try {
        await entityRepository.save(entity);
        console.log('Entity saved successfully.');
    } catch (error) {
        console.error('Error saving entity:', error);
    } finally {
        await connection.close();
    }
}

