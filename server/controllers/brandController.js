const {Brand} = require('../models/models');

class BrandController {
    async createBrand(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.status(200).json(brand);
    }

    async getAllBrands(req, res) {
        const brands = await Brand.findAll();
        return res.status(200).json(brands);
    }
}

module.exports = new BrandController();