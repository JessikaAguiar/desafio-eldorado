class Device {
    constructor (name, categoryId, color, partNumber) {
        this.name = name
        this.category_id = categoryId
        this.color = color
        this.part_number = partNumber
    }

    valid() {
        return (this.name && this.category_id && this.color && this.part_number)
    }
}

module.exports = Device
