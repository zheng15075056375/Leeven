var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: Number,
        required: true,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: String,
        required: true
    }
});

ProjectSchema.path('name').validate(function(name) {
    return name.length;
}, '名称不能为空');

mongoose.model('Project', ProjectSchema);