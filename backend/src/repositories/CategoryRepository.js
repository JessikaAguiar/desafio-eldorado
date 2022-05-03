const CategoryModel = require('../database/models/CategoryModel')

class CategoryRepository {
    async add(categorie) {
        try {
            return await CategoryModel.create(categorie)
        } catch (error) {
            console.log(error.message)
        }
    }

    async selectAll() {
        try {
            return await CategoryModel.findAll()
        } catch (error) {
            console.log(error.message)
        }
    }

    async selectByFilter(filter) {
        try {
            return await CategoryModel.findAll({
                where: filter
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async update(categorie) {
        try {
            return await CategoryModel.update(categorie, {
                where: {
                    id: categorie.id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async remove(id) {
        try {
            return await CategoryModel.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = CategoryRepository
