const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

const User = mongoose.model("User",UserSchema)

UserSchema.pre("save", async (next) => {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
});

UserSchema.methods.verifyPassword = (password) => {
    return bcrypt.compare(this.password,password)
}

module.exports = User