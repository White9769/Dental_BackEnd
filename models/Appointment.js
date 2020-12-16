const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
  {
    dentNumber: String,
    price: String,
    diagnosis: String,
    date: String,
    time: String,
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' }
  },
  {
    timestamps: true
  },
    {
        versionKey: false
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
