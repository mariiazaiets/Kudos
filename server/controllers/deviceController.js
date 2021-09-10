const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');

class DeviceController {
    async createDevice(req, res) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            //Generating a unique file name using the uuid package
            let fileName = uuid.v4() + '.jpg';

            //Move the file with the given name to the static folder, which will contain all
            // the files that will be sent from the client
            await img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    });
                });
            }

            return res.status(200).json(device);

        } catch (e) {
            res.status(400).json({message: e});
        }
    }

    async getAllDevice(req, res) {
        const {brandId, typeId, limit = 9, page = 1} = req.query;
        let offset = page * limit - limit;
        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        } else if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        } else if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        } else {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }
        return res.status(200).json(devices);
    }

    async getOneDevice(req, res) {
        const {id} = req.params;
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        });
        res.status(200).json(device);
    }
}

module.exports = new DeviceController();